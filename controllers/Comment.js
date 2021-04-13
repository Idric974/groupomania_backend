//* ✅ 👉 Paramètres.
const { comments } = require("../models");
const db = require("../models");
const User = db.users;
const Comment = db.comments;
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Create a comment.
exports.createComment = (req, res, next) => {
  const newComment = Comment.create({
    title: req.body.title,
    comment: req.body.comment,
    userId: req.body.userId,
    postId: req.body.postId,
  })
    .then(() => res.status(200).json({ message: "Commentaire créé ! 👍" }))
    .catch((error) => {
      console.log(error);

      return res.status(400).json({ error });
    });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Show all comments.
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
      return res.status(404).json({ error: "Pas de commentaire trouvé 😥" });
    }
    res.status(200).json({ comments });
  });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Show all reported comments.
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

//* ✅ 👉 Edit one comment.
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

//* ✅ 👉 Edit one comment.
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

//* ✅ 👉 Update one comment.
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

//* ✅ 👉 Report one comment.
exports.reportComment = (req, res, next) => {
  Comment.findOne({
    where: { id: req.params.id },
  })
    .then((comments) => {
      if (!comments) {
        return res.status(404).json({
          error: "❌❌❌ 😥➖➖➖➖➖➖➤ Pas de commentaire trouvé",
        });
      }
      res
        .status(200)
        .json({ comments: "✔️✔️✔️ 😃➖➖➖➖➖➖➤ Commentaire Signalé" });
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

//* ✅ 👉 Remove flagging from a comment
exports.supReportComment = (req, res, next) => {
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
        .json({ comments: "✔️✔️✔️ 😃➖➖➖➖➖➖► commentaire trouvé" });
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

//* ✅ 👉 Delete one comment.

exports.deleteComment = (req, res, next) => {
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
