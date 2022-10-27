const express = require("express");
require("dotenv").config();
const passport = require("passport");
require("./utils/auth/passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const { connectDb } = require("./utils/db");

const userRouter = require("./routes/user.routes");
const moviesRouter = require("./routes/movies.routes");
const cinemasRouter = require("./routes/cinema.routes");

connectDb();

const PORT = process.env.PORT || 8000;

const server = express();
const router = express.Router();


server.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000,
    },
    store: MongoStore.create({
      mongoUrl: process.env.DB_URL,
    })
  })
);

server.use(passport.initialize());
server.use(passport.session());

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/users", userRouter);
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
