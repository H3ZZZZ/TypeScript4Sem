import mongoose from 'mongoose';

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Person must have a name'],
    trim: true,
    maxlength: [20, 'A Person name must have less or equal to 20 characters'],
    minLength: [2, 'A Person name must have more or equal to 2 characters'],
  },
  age: Number,
  city: String,
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false, // This will not show the createdAt field when we get the data
  },
});

const Person = mongoose.model('Person', peopleSchema);

export default Person;
