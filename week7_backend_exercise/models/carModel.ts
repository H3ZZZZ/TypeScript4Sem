import mongoose from 'mongoose';
import Review from './reviewModel';

const carSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: [true, 'A car must have a model'],
      trim: true,
      maxlength: [20, 'A car model must have less or equal than 20 characters'],
      minLength: [2, 'A car model must have more or equal than 2 characters'],
    },
    year: Number,
    price: {
      type: Number,
      required: [true, 'A car must have a price'],
    },
    color: {
      type: String,
      enum: ['red', 'blue', 'green', 'black', 'white', 'yellow'],
      message: 'Color is either: red, blue, green, black, white, yellow',
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false, // This will not show the createdAt field when we get the data
    },
    reviews: Array,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

carSchema.pre('save', async function (next) {
  const reviewPromises = this.reviews.map((id) => Review.findById(id));
  this.reviews = await Promise.all(reviewPromises);
  console.log('Will save document...');
  next();
});

// carSchema.pre(/^find/, function () {
//   this.populate({
//     path: 'reviews',
//     select: '-__v -createdAt',
//   });
// });

carSchema.virtual('discount').get(function () {
  return this.price * 0.2;
});

const Car = mongoose.model('Car', carSchema);

export default Car;
