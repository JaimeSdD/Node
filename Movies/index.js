const express = require("express");
require("dotenv").config();

const { connectDb } = require("./utils/db");

const moviesRouter = require("./routes/movies.routes");
const cinemasRouter = require("./routes/cinema.routes");

connectDb();

const PORT = process.env.PORT || 8000;

const server = express();
const router = express.Router();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/movies", moviesRouter);
server.use("/cinemas", cinemasRouter);

server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

server.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || "Unexpected error");
});

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
