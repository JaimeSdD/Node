const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.model");

router.get("/", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      return res.status(200).json(movies);
    })
    .catch((error) => {
        return next (error);
    });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;

  Movie.findById(id)
    .then((movies) => {
      return res.status(200).json(movies);
    })
    .catch((error) => {
        return next (error);
    });
});

router.get("/title/:title", (req, res, next) => {
  const title = req.params.title;

  Movie.find({ title: title.toLowerCase() })
    .then((movies) => {
      return res.status(200).json(movies);
    })
    .catch((error) => {
        return next (error);
    });
});

router.get("/genre/:genre", (req, res, next) => {
  const genre = req.params.genre;

  Movie.find({ genre: genre.toLowerCase() })
    .then((movies) => {
      return res.status(200).json(movies);
    })
    .catch((error) => {
        return next (error);
    });
});

router.get("/year/:year", (req, res, next) => {
  const year = req.params.year;

  Movie.find({ year: { $gte: year } })
    .then((movies) => {
      return res.status(200).json(movies);
    })
    .catch((error) => {
        return next (error);
    });
});

router.post("/create", async (req, res, next) => {
  try {
    const movie = req.body;
    const newMovie = new Movie(movie);
    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return next (error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const {id} = req.params;
    await Movie.findByIdAndDelete(id);
    return res.status(201).json("Movie deleted");
  } catch (error) {
    return next (error);
  }
});

router.put('/edit/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const movieModify = new Movie(req.body);
        movieModify._id = id;
        const movieUpdated = await Movie.findByIdAndUpdate(id , movieModify);
        return res.status(200).json(movieUpdated)
    } catch (error) {
        return next (error);
    }
});

module.exports = router;
