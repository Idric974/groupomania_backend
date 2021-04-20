const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD_OCR,
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("✅➖➖➖➖➖➖➖► Connexion à la base de données OK 😃 !!!.");
  })
  .catch((err) => {
    console.error(
      "❌➖➖➖➖➖➖► Connexion à la base de données ❌❌ échouée ❌❌",
      err
    );
  });

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = require("./User")(sequelize, Sequelize);
db.posts = require("./Post")(sequelize, Sequelize);
db.comments = require("./Comment")(sequelize, Sequelize);

db.posts.belongsTo(db.users, {
  onDelete: "cascade",
  onUpDate: "cascade",
});

db.comments.belongsTo(db.users, {
  onDelete: "cascade",
  onUpDate: "cascade",
});

db.comments.belongsTo(db.posts, {
  onDelete: "cascade",
  onUpDate: "cascade",
});

module.exports = db;
