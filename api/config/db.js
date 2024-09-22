const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://mernseries2:35gEzyrBDPZK0sdO@ecommerceapp.wzimn.mongodb.net/?retryWrites=true&w=majority&appName=eCommerceApp";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
