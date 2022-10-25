const mongoose = require("mongoose");

const Movie = require("../../models/movie");

require("dotenv").config();

const DB_URL = process.env.DB_URL;

const movies = [
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      genre: 'Acción',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      genre: 'Acción',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      genre: 'Animación',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      genre: 'Animación',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Ciencia ficción',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      genre: 'Comedia romántica',
    }
  ];
  
  let moviesInsensitive = movies.map((x) => Object.fromEntries(
    Object.entries(x).map(([key, value]) => [
      key,
      typeof value == "string"
        ? value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replaceAll(" ", "-")
        : value,
    ]))
  );

  const moviesDocuments = moviesInsensitive.map(movie => new Movie(movie));

  mongoose.connect(DB_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true

  }).then(async () => {

    const allMovies = await Movie.find();

    if (allMovies){

        await Movie.collection.drop();
        console.log("All movies has been deleted");

    }

  })
  .catch((error) => console.log("Could not delete the data " + error))
  .then(async () => {

    await Movie.insertMany(moviesDocuments);
    console.log("New movies has been created")

  })
  .catch((error) => console.log("Could not add the data " + error))
  .finally(() => mongoose.disconnect());