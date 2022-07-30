const argon2 = require("argon2");
const Joi = require("joi");

const models = require("../models");

class UserController {
  static me = async (req, res) => {
    const { user } = req.session;
    try {
      if (!user) {
        return res.sendStatus(401);
      }

      return res.send(user);
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  };

  static login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const [data] = await models.users.findByEmail(email);

      if (data.length === 0) {
        return res.sendStatus(401);
      }

      const user = data[0];

      if (await argon2.verify(user.password, password)) {
        delete user.password;

        req.session.user = user;

        return res.send(user);
      }

      return res.sendStatus(401);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Error !");
    }
  };

  static logout = async (req, res) => {
    try {
      if (req.session) {
        req.session.destroy();
      }

      return res.sendStatus(204);
    } catch (err) {
      return res.sendStatus(400);
    }
  };

  static signin = async (req, res) => {
    const { email, emailConfirm, password, passwordConfirm } = req.body;

    try {
      const validation = Joi.object({
        email: Joi.string()
          .min(3)
          .max(255)
          .email({ minDomainSegments: 2, tlds: { allow: ["fr", "com"] } })
          .required(),
        password: Joi.string()
          .min(5)
          .max(255)
          .pattern("^[a-zA-Z0-9]{3,30}$")
          .required(),
      }).validate({ email, password }, { abortEarly: false });

      if (validation.error) {
        return res.status(400).send("Email or password wrong format !");
      }

      const [emailAlreadyExists] = await models.users.findByEmail(email);

      if (emailAlreadyExists.length === 1) {
        return res.status(409).send("Email already exists !");
      }

      if (email !== emailConfirm || password !== passwordConfirm) {
        return res.status(409).send("Email or password doesn't match !");
      }

      const hasPassword = await argon2.hash(password);

      const user = { email, password: hasPassword };

      const [result] = await models.users.insert(user);

      if (result.affectedRows === 0) {
        return res.sendStatus(409);
      }

      user.id = result.insertId;

      return res.status(201).send(user);
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  };
}

module.exports = UserController;
