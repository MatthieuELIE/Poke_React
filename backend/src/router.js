const express = require("express");

const { UserController, FavoriteController } = require("./controllers");

const router = express.Router();

router.post("/login", UserController.login);
router.get("/me", UserController.me);
router.delete("/logout", UserController.logout);

router.get("/favorites", FavoriteController.read);
router.post("/favorites", FavoriteController.add);
router.delete("/favorites/:id", FavoriteController.delete);

module.exports = router;
