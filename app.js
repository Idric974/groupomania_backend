const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");

const userRoutes = require("./routes/User");

const app = express();

/*Middleware général sans routes spécifique et appliqué à toutes les requêtes du serveur.*/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

/*Module de connexion à la base de données.*/
const db = require("./models");
db.sequelize.sync({
  force: true,
});
/******************************************************************************************/

/*Transformer le corps de la requête en objet JSON.*/
app.use(bodyParser.json());
/******************************************************************************************/

app.use("/api/user", userRoutes);
app.use("/api/post", userRoutes);
app.use("/api/comments", userRoutes);

module.exports = app;
