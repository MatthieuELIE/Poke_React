const models = require("../models");

class FavoriteController {
  static read = async (req, res) => {
    try {
      const { user } = req.session;

      const [favorites] = await models.favorites.findByUser(user.id);

      if (!favorites) {
        return res.status(404).send("You have no favorites !");
      }

      return res.send(favorites);
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  };

  static add = async (req, res) => {
    try {
      const { userId, pokemonId } = req.body;

      const [result] = await models.favorites.insert(
        userId,
        parseInt(pokemonId, 10)
      );

      if (!result) {
        return res.status(409).send("Conflict");
      }

      return res.status(201).send({ userId, pokemonId, id: result.insertId });
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  };

  static delete = async (req, res) => {
    try {
      const pokemonId = req.params.id;
      if (!pokemonId) {
        return res.status(404).send("Favorite not found !");
      }

      const [result] = await models.favorites.delete(pokemonId);
      if (!result) {
        return res.status(409).send("Conflict");
      }

      return res.status(200).send("Favorite deleted");
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  };
}

module.exports = FavoriteController;
