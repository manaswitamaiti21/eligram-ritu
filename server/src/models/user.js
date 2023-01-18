const mongoose = require('mongoose');

const dateOfBirthSchema = new mongoose.Schema({
  date: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
});

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowercase: true,
    },
    // 0-Complete   1-Email Verified, data tbd   2-Verify Email
    state: { type: Number, default: 2, enum: [0, 1, 2] },
    role: { type: String, default: 'USER', enum: ['USER', 'ADMIN', 'OWNER'] },
    vcode: { type: Number, required: true },
    gender: {
      type: String,
      required: true,
      default: 'male',
      enum: ['male', 'female'],
    },
    dateOfBirth: {
      type: dateOfBirthSchema,
      required: true,
      default: {
        date: 1,
        month: 1,
        year: 1970,
      },
    },
    passwordResetRequest: { type: Boolean, default: false },
    passwordResetCode: { type: Number },
    profilePicture: {
      type: String,
      required: true,
      default:
        'https://storage.googleapis.com/rituparna-a.appspot.com/eligram%2Fassets%2Fphotos%2F1674025800920_user-default185c3b694d8.png',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
