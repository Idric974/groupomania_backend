//* ✅ 👉 Paramètres.
const db = require("../models");
const User = db.users;
const Comment = db.comments;

//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Créer un commentaire.
exports.createComment = (req, res, next) => {
  console.log(req.body.userId);
  const newPost = Comment.create({
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

//* ✅ 👉 Afficher tous les postes.
exports.readAll = async (req, res, next) => {
  Comment.findAll({
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
