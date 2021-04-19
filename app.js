const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const userRoutes = require("./routes/User");

const app = express();
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Middleware général sans routes spécifique et appliqué à toutes les requêtes du serveur.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization",
    "Access-Control-Allow-Credentials",
    "true"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Access-Control-Request-Headers",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Module de connexion à la base de données.
const db = require("./models");
db.sequelize.sync({
  force: false,
});
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 récupérer les arguments et les paramètres fournis dans une requête HTTP.
app.use(bodyParser.json());
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Routes pricipales de l'application
app.use("/api/user", userRoutes);

//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

module.exports = app;
