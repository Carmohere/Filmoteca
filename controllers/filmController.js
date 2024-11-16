const Film = require('../models/filmModel');

// Criar um novo filme
exports.createFilm = async (req, res) => {
  try {
    const { title, genre, year, description } = req.body;
    const film = await Film.create({ title, genre, year, description });
    res.status(201).json(film);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter todos os filmes
exports.getFilms = async (req, res) => {
  try {
    const films = await Film.findAll();
    res.json(films);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter um filme específico
exports.getFilm = async (req, res) => {
  try {
    const film = await Film.findByPk(req.params.id);
    if (film) {
      res.json(film);
    } else {
      res.status(404).json({ message: 'Filme não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar um filme
exports.updateFilm = async (req, res) => {
  try {
    const { title, genre, year, description } = req.body;
    const film = await Film.findByPk(req.params.id);
    if (film) {
      film.title = title || film.title;
      film.genre = genre || film.genre;
      film.year = year || film.year;
      film.description = description || film.description;
      await film.save();
      res.json(film);
    } else {
      res.status(404).json({ message: 'Filme não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Deletar um filme
exports.deleteFilm = async (req, res) => {
  try {
    const film = await Film.findByPk(req.params.id);
    if (film) {
      await film.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Filme não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
