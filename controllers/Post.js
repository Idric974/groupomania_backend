const db = require("../models/Post");
const User = db.post;
const fs = require("fs");
const { post } = require("../routes/User");

//* ✅ 👉 Créer un poste.
exports.createPost = async (req, res, next) => {
  const post = await Post.create({
    where: {
      title: req.data.title,
      content: req.data.content,
      userId: req.objJson.userId,
    },
  });
  if (post === null) {
    console.log("Post non créé");
  } else {
    console.log(post instanceof Post);
    console.log(post.title);
  }
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Afficher un poste.
exports.readPost = async (req, res, next) => {
  const project = await Project.findOne({ where: { title: "My Title" } });
  if (project === null) {
    console.log("Not found!");
  } else {
    console.log(project instanceof Project);
    console.log(project.title);
  }
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Afficher tous les postes.
exports.readAllPost = async (req, res, next) => {
  Model.findAll({
    attributes: [
      "foo",
      [sequelize.fn("COUNT", sequelize.col("hats")), "n_hats"],
      "bar",
    ],
  });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Mettre à jour un poste.
exports.updatePost = async (req, res, next) => {
  await Post.update(
    { lastName: "Doe" },
    {
      where: {
        lastName: null,
      },
    }
  );
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Supprimer un poste.
exports.destroyPost = async (req, res, next) => {
  await Post.destroy({
    where: {
      title: req.data.title,
      content: req.data.content,
      userId: req.objJson.userId,
    },
  });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
