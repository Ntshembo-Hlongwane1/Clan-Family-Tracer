import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
//===================================================Middlwares=========================================================
app.use(cors());

//=============================================MongoDB Configs and Connection===========================================
const mongoURI = process.env.mongoURI;
const mongoDB__connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(mongoURI, mongoDB__connectionOptions, (error) => {
  if (error) {
    return console.error(error);
  }
  console.log("Connection to MongoDB was successful...");
});

//==============================================Server Configs and Connection===========================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
