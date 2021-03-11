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
exports.findOne = async (req, res, next) => {
  Post.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: User,
        attributes: ["name", "firstname"],
      },
    ],
  }).then((posts) => {
    if (!posts) {
      return res.status(404).json({ error: "Pas de poste trouvé" });
    }
    res.status(200).json({ posts });
  });
};

//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Afficher tous les postes.
exports.readAllPosts = async (req, res, next) => {
  Post.findAll({
    include: [
      {
        model: User,
        attributes: ["firstname", "name"],
      },
    ],
    order: [["createdAt", "DESC"]],
  }).then((posts) => {
    if (!posts) {
      return res.status(404).json({ error: "Pas de poste trouvé" });
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

// //* ✅ 👉 Supprimer un poste.
exports.delete = (req, res) => {
  Post.destroy({
    where: { id: req.params.id },
    include: [
      {
        model: Post,
        attributes: ["title", "content"],
      },
    ],
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Poste supprimé",
        });
        console.log("✅✅✅✅✅✅✅ Poste supprimé");
      } else {
        res.send({
          message: "Imposible de supprimer cet post",
        });
        console.log("❌ ❌ ❌ ❌ ❌ ❌ Imposible de supprimer cet post");
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Post non supprimé" });
      console.log("CATCH ❌ ❌ ❌ ❌ ❌ ❌ Post non supprimé");
    });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
