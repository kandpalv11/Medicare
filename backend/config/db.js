import mongoose from "mongoose";

export const connectDB = async ()=> {
  await mongoose.connect("mongodb+srv://vivekkandpal81_db_user:irsX1ppQsqWjgMOQ@cluster0.zdaxvul.mongodb.net/Medicare")
  .then(() => {console.log("DB connected")})
}


