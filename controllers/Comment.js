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

//* ✅ 👉 Afficher tous les postes.
exports.readAllReported = async (req, res, next) => {
  Comment.findAll({
    where: { signale: 1 },
    include: [
      {
        model: User,
        attributes: ["firstname", "name"],
      },
    ],
    order: [["createdAt", "DESC"]],
  }).then((comments) => {
    if (!comments) {
      return res.status(404).json({ error: "Pas de poste trouvé" });
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

//* ✅ 👉 Afficher un commentaire.
exports.findOneComment = async (req, res, next) => {
  Comment.findOne({
    where: { id: req.params.id },
  }).then((comments) => {
    if (!comments) {
      return res.status(404).json({ error: "Pas de user trouvé" });
    }
    res.status(200).json({ comments });
  });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Mettre à jour un commentaire.
exports.updateComment = (req, res, next) => {
  Comment.findOne({
    where: { id: req.params.id },
  })
    .then((comments) => {
      if (!comments) {
        return res.status(404).json({ error: "Pas de post trouvé" });
      }
      res.status(200).json({ comments: "Post trouvé" });
    })
    .then(() => {
      const values = {
        title: req.body.title,
        content: req.body.comment,
      };
      const condition = { where: { id: req.params.id } };
      options = { multi: true };

      Comment.update(values, condition, options).then(function (upresult) {});
    });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Signaler un commentaire.
exports.reportComment = (req, res, next) => {
  Comment.findOne({
    where: { id: req.params.id },
  })
    .then((comments) => {
      if (!comments) {
        return res
          .status(404)
          .json({ error: "❌❌❌ 😥➖➖➖➖➖➖► Pas de commentaire trouvé" });
      }
      res
        .status(200)
        .json({ comments: "✔️✔️✔️ 😃➖➖➖➖➖➖► Commentaire trouvé" });
    })
    .then(() => {
      const values = {
        signale: req.body.signale,
      };
      const condition = { where: { id: req.params.id } };
      options = { multi: true };

      Comment.update(values, condition, options).then(function (upresult) {});
    });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Supprimer un commentaire.

exports.deleteComment = (req, res) => {
  Comment.findOne({
    where: { id: req.params.id },
  })
    .then((comments) => {
      if (!comments) {
        return res
          .status(404)
          .json({ error: "❌❌❌ 😥➖➖➖➖➖➖► Pas de commentaire trouvé" });
      }
      res
        .status(200)
        .json({ comments: "✔️✔️✔️ 😃➖➖➖➖➖➖► Commentaire trouvé" });
    })
    .then(() => {
      Comment.destroy({
        where: { id: req.params.id },
      }).then(() => {
        console.log("✔️  ✔️  ✔️  😃➖➖➖➖➖➖► Commentaire Supprimé");
      });
    });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
