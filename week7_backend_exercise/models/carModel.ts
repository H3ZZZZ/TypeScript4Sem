import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    model: {
        type: String,
        required: [true, 'A car must have a model'],
        trim: true,
        maxlength: [20, 'A car model must have less or equal than 20 characters'],
        minLength: [2, 'A car model must have more or equal than 2 characters']
    },
    year: Number,
    price: Number,
    color: {
        type: String,
        enum: ['red', 'blue', 'green', 'black', 'white', 'yellow'],
        message: 'Color is either: red, blue, green, black, white, yellow'
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false // This will not show the createdAt field when we get the data 
    }
});

const Car = mongoose.model('Car', carSchema);

export default Car;