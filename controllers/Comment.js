//* ✅ 👉 Paramètres.
const { comments } = require("../models");
const db = require("../models");
const User = db.users;
const Comment = db.comments;
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Créer un commentaire.
exports.createComment = (req, res, next) => {
  console.log(req.body.userId);
  const newPost = Comment.create({
    title: req.body.title,
    comment: req.body.comment,
    userId: req.body.userId,
    postId: req.body.postId,
  })
    .then(() => res.status(200).json({ message: "Commentaire créé !" }))
    .catch((error) => {
      console.log(error);

      return res.status(400).json({ error });
    });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Afficher tous les commentaire.
exports.readAllcomments = async (req, res, next) => {
  Comment.findAll({
    attributes: ["id", "title", "comment", "createdAt", "userId"],
    include: [
      {
        model: User,
        attributes: ["alias"],
      },
    ],
    order: [["createdAt", "DESC"]],

    where: { postId: req.params.postId },
  }).then((comments) => {
    if (!comments) {
      return res.status(404).json({ error: "Pas de commentaire trouvé" });
    }
    res.status(200).json({ comments });
  });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Afficher un commentaire.
exports.findOne = async (req, res, next) => {
  await Post.findOne({
    where: { postId: req.params.postId },
  }).then((comments) => {
    if (!comments) {
      return res.status(404).json({ error: "Pas de post trouvé" });
    }
    res.status(200).json({ comments });
  });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Mettre à jour un commentaire.
exports.update = async (req, res, next) => {
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

//* ✅ 👉 Supprimer un commentaire.
exports.delete = (req, res) => {
  Post.destroy({
    where: { postId: req.body.id },
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
