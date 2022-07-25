const path = require("path");
const express = require("express");
const cors = require("cors");
const session = require("express-session");

// let's create express app
const app = express();

// Handle sessions
app.use(
  session({
    name: "PokeReact",
    secret: "GengarBestPokemonAndHeIsTheGoat!",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

// load router
const router = require("./router");

app.use(router);

// ready to export
module.exports = app;
