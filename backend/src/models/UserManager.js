const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "users";

  async findByEmail(email) {
    return this.connection.query(
      `SELECT * FROM ${UserManager.table} WHERE email = ?`,
      [email]
    );
  }

  async insert(user) {
    return this.connection.query(
      `INSERT INTO ${UserManager.table} (email, password) values (?, ?)`,
      [user.email, user.password]
    );
  }
}

module.exports = UserManager;
