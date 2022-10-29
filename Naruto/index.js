const express = require("express");
require("dotenv").config();

const {connectDb} = require("./src/utils/database/db");

connectDb();

const PORT = process.env.PORT || 8080;

const server = express();
const router = express.Router();

server.use("/", (req, res) => {
    return res.status(200).json("Server OK");
})

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});