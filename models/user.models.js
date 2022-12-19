import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  username: String,
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
    minlength: 5,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 255,
    select: false
  },
  role: {
    type: String,
    default: 'user'
  }
});


const USchema = mongoose.model('User', userSchema, 'user_collection');


export default {
    USchema,
}