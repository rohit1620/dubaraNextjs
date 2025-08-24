import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:String,
    age:String,
    salary:String

})

export const User =
  mongoose.models.user || mongoose.model("user", userSchema);