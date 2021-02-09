const Sequelize = require("sequelize");

const sequelize = new Sequelize("groupomania", "root", "Clement044835", {
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("=============> Connexion à la base de données OK 😃 !!!.");
  })
  .catch((err) => {
    console.error(
      "=============> Connexion à la base de données ❌❌ échouée ❌❌",
      err
    );
  });

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = require("./User")(sequelize, Sequelize);
db.posts = require("./Post")(sequelize, Sequelize);
db.comments = require("./Comments")(sequelize, Sequelize);

module.exports = db;
