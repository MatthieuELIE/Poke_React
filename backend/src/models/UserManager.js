const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "users";

  findByEmail(email) {
    return this.connection.query(
      `SELECT * FROM ${UserManager.table} WHERE email = ?`,
      [email]
    );
  }

  insert(user) {
    return this.connection.query(
      `INSERT INTO ${UserManager.table} (nickname, password) values (?, ?)`,
      [user.nickname, user.password]
    );
  }
}

module.exports = UserManager;
