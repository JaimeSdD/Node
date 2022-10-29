const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;

if (!DB_URL) throw new Error("The database url cannot be found.");

const connectDb = async () => {
  try {
    const db = await mongoose.connect(DB_URL);
    const { name, host } = db.connection;
    console.log(`Connected to the database: ${name}, in host: ${host}`);
  } catch (error) {
    console.log("Error to connect with the database", error);
  }
};

module.exports = { connectDb };
