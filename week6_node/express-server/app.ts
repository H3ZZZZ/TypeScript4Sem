import express = require("express");
import morgan = require("morgan");
import fs = require("fs");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Development mode");
}

app.use(express.json()); // body parser for json data
app.use(express.static(`${__dirname}/public`)); // static files

// Middleware
// app.use((req, res, next) => {
//   console.log("Hello from the middleware");
//   next();
// });

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Part 1 hello world
app.get("/", (req, res) => {
  const date = req.requestTime;
  res.status(200).json({
    status: "success",
    message: date,
  });
});

//Part 2 hello world with params
app.get("/hello/:name", (req, res) => {
  res.status(200).json({
    status: "success",
    message: `Hello ${req.params.name}!`,
  });
});

// Part 3 hello world with query
app.get("/hello", (req, res) => {
  res.status(200).json({
    status: "success",
    // message: `Hello ${req.query.name}!`,
    message: `Hello ${req.query.name || "World.."}!`,
  });
});

// Part 4 error
app.get("/error", (req, res) => {
  try {
    throw new Error("Went wrong");
    res.status(200).json({
      status: "success",
      message: "Hello World!",
    });
  } catch (err: any) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
});

// Part 5 JSON DATA
app.get("/data", (req, res) => {
  const data = fs.readFileSync("data.json", "utf-8");

  res
    .status(200)
    .header({
      "Content-Type": "application/json",
      "Content-Length": data.length,
    })
    .json({
      status: "success",
      data: JSON.parse(data),
    });
});

//Part 6 Post JSON data
app.post("/", (req, res) => {
  const jsonData = req.body;

  res.status(201).json({
    status: "success",
    data: jsonData,
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
