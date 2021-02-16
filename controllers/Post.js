//* ✅ 👉 Paramètres.
const db = require("../models");

const User = db.users;
const Post = db.posts;

//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Créer un poste.
exports.createPost = (req, res, next) => {
  const newPost = Post.create({
    title: req.body.title,
    content: req.body.content,
    userId: req.body.userId,
  })
    .then(() => res.status(200).json({ message: "Poste créé !" }))
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ error });
    });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Afficher un poste.
exports.readPost = async (req, res, next) => {
  const project = await Project.findOne({
    where: {
      title: req.body.title,
      content: req.body.content,
      userId: req.body.objJson,
    },
  });
  if (project === null) {
    console.log("Not found!");
  } else {
    console.log(project instanceof Project);
    console.log(project.title);
  }
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Afficher tous les postes.
exports.readAllPosts = async (req, res, next) => {
  Post.findAll({
    include: [
      {
        model: User,
        attributes: ["alias"],
      },
    ],
    order: [["createdAt", "DESC"]],
  }).then((posts) => {
    if (!posts) {
      return res.status(404).json({ error: "Pas de post" });
    }
    res.status(200).json({ posts });
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
