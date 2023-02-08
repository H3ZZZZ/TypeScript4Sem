const superagent = require("superagent");
const fs = require("fs");

// Callback hell

// fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
//   superagent
//     .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
//     .end((err, res) => {
//       if (err) return console.log(err);
//       console.log(res.body.message);

//       fs.writeFile(`${__dirname}/dogresponse.txt`, res.body.message, (err) => {
//         if (err) return console.error(err);
//         console.log("Response saved to file successfully.");
//       });
//     });
// });

// Then syntax

// fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
//   superagent
//     .get(`https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`)
//     .then((res) => {
//       console.log(res.body.message);
//       fs.writeFile(`${__dirname}/dogresponse.txt`, res.body.message, (err) => {
//         if (err) return console.error(err);
//         console.log("Image saved to file successfully.");
//       });
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// });

// Promise syntax

const readFilePromise = (file) => {
  // executor function
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) reject("I could not find that file.");
      resolve(data);
    });
  });
};

const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("I could not write the file.");
      resolve("Image saved to file successfully.");
    });
  });
};

// readFilePromise(`${__dirname}/dog.txt`).then((data) =>
//   superagent
//     .get(`https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`)
//     .then((res) => writeFilePromise(res.body.message))
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("I am done"))
// );

// async await syntax

// const getDogPics = async () => {
//   try {
//     const data = await readFilePromise(`${__dirname}/dog.txt`);
//     const res = await superagent.get(
//       `https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`
//     );
//     const text = await writeFilePromise("dogresponse.txt", res.body.message);
//     return text;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// IFFI Immediately Invoked Function Expression

// console.log("1: I will get dog pics");
// (async () => {
//   try {
//     const data = await getDogPics();
//     console.log("2: ", data);
//   } catch (error) {
//     console.log(error.message);
//   }
// })();
// console.log("3: Done getting dog pics");

// getDogPics();


// Waiting for multiple promises to resolve

const getDogPics = async () => {
  try {
    const data = await readFilePromise(`${__dirname}/dog.txt`);
    const res1 = await superagent.get(
      `https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`
    );
    const res2 = await superagent.get(
      `https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`
    );
    const res3 = await superagent.get(
      `https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`
    );

    const all = await Promise.all([res1, res2, res3]);
    const images = all.map((el) => el.body.message);
    console.log(images);

    const text = await writeFilePromise("dogresponse.txt", images.join("\n"));
    console.log(text);
    //return text;
  } catch (error) {
    throw new Error(error.message);
  }
};

getDogPics();
