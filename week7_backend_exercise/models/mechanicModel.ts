import mongoose from 'mongoose';
import slugify from 'slugify';

const mechanicSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'A mechanic must have a first name'],
    trim: true,
    maxlength: [
      20,
      'A mechanic first name must have less or equal than 20 characters',
    ],
    minLength: [
      2,
      'A mechanic first name must have more or equal than 2 characters',
    ],
  },
  lastName: {
    type: String,
    required: [true, 'A mechanic must have a last name'],
    trim: true,
    maxlength: [
      20,
      'A mechanic last name must have less or equal than 20 characters',
    ],
    minLength: [
      2,
      'A mechanic last name must have more or equal than 2 characters',
    ],
  },
  email: {
    type: String,
    required: [true, 'A mechanic must have an email'],
    trim: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (email: string) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
      },
      message: (props: { value: string }) =>
        `${props.value} is not a valid email address!`,
    },
  },
  role: {
    type: String,
    enum: ['mechanic', 'admin', 'mechanic-intern', 'lead-mechanic'],
    default: 'mechanic',
  },
  password: {
    type: String,
    required: [true, 'A mechanic must have a password'],
    trim: true,
    minlength: [
      8,
      'A mechanic password must have more or equal than 8 characters',
    ],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false, // This will not show the createdAt field when we get the data
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: [true, 'A mechanic must be asigned to a car'],
  },
  slug: String,
});

mechanicSchema.pre('save', function (next) {
  this.slug = slugify(this.firstName + this.lastName, { lower: true });
  next();
});

mechanicSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'car',
  });
  next();
});

// DOCUMENT MIDDLEWARE: runs after .save() and .create()
mechanicSchema.post('save', function (doc, next) {
    console.log(doc);
    next();
});

const Mechanic = mongoose.model('Mechanic', mechanicSchema);

export default Mechanic;
