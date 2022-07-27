const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  static table = "favorites";

  findByUser(userId) {
    return this.connection.query(
      `SELECT * FROM ${FavoriteManager.table} WHERE user_id = ?`,
      [userId]
    );
  }

  insert(userId, pokemonId) {
    return this.connection.query(
      `INSERT INTO ${FavoriteManager.table} (user_id, pokemon_id) VALUES (?, ?)`,
      [userId, pokemonId]
    );
  }

  update(favorite) {
    return this.connection.query(
      `UPDATE ${FavoriteManager.table} SET pokemond_id = ? WHERE user_id = ?`,
      [favorite.pokemond_id, favorite.user_id]
    );
  }
}

module.exports = FavoriteManager;
