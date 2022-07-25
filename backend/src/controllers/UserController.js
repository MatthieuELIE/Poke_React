const argon2 = require("argon2");
const Joi = require("joi");

const models = require("../models");

class UserController {
  static me = async (req, res) => {
    const { user } = req.session;

    if (!user) {
      return res.sendStatus(401);
    }

    return res.send(user);
  };

  static login = async (req, res) => {
    const { email, password } = req.body;

    const validation = Joi.object({
      email: Joi.string().min(3).max(255).required(),
      password: Joi.string().min(5).max(255).required(),
    }).validate({ email, password }, { abortEarly: false });

    if (validation.error) {
      return res.status(400).send("Nickname or password incorrect");
    }

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
  };
}

module.exports = UserController;
