const express = require("express");

const { UserController } = require("./controllers");

const router = express.Router();

router.post("/login", UserController.login);
router.get("/me", UserController.me);
router.delete("/logout", UserController.logout);

module.exports = router;
