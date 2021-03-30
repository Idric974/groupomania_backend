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
exports.readAllPosts = (req, res, next) => {
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

//* ✅ 👉 Afficher tous les postes.
exports.readAllReported = async (req, res, next) => {
  Post.findAll({
    where: { signale: 1 },
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

//* ✅ 👉 Mettre à jour un post.
exports.updatePost = (req, res, next) => {
  Post.findOne({
    where: { id: req.params.id },
  })
    .then((posts) => {
      if (!posts) {
        return res.status(404).json({ error: "Pas de post trouvé" });
      }
      res.status(200).json({ posts: "Post trouvé" });
    })
    .then(() => {
      const values = {
        title: req.body.title,
        content: req.body.content,
      };
      const condition = { where: { id: req.params.id } };
      options = { multi: true };

      Post.update(values, condition, options).then(function (upresult) {});
    });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Signaler un post.
exports.reportPost = (req, res, next) => {
  Post.findOne({
    where: { id: req.params.id },
  })
    .then((posts) => {
      if (!posts) {
        return res
          .status(404)
          .json({ error: "❌❌❌ 😥➖➖➖➖➖➖► Pas de poste trouvé" });
      }
      res.status(200).json({ posts: "✔️✔️✔️ 😃➖➖➖➖➖➖► Post trouvé" });
    })
    .then(() => {
      const values = {
        signale: req.body.signale,
      };
      const condition = { where: { id: req.params.id } };
      options = { multi: true };

      Post.update(values, condition, options).then(function (upresult) {});
    });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Signaler un post.
exports.supReportPost = (req, res, next) => {
  Post.findOne({
    where: { id: req.params.id },
  })
    .then((posts) => {
      if (!posts) {
        return res
          .status(404)
          .json({ error: "❌❌❌ 😥➖➖➖➖➖➖► Pas de poste trouvé" });
      }
      res.status(200).json({ posts: "✔️✔️✔️ 😃➖➖➖➖➖➖► Post trouvé" });
    })
    .then(() => {
      const values = {
        signale: req.body.signale,
      };
      const condition = { where: { id: req.params.id } };
      options = { multi: true };

      Post.update(values, condition, options).then(function (upresult) {});
    });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// //* ✅ 👉 Supprimer un poste.
exports.deletePost = (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
  })
    .then((posts) => {
      if (!posts) {
        return res
          .status(404)
          .json({ error: "❌❌❌ 😥➖➖➖➖➖➖► Pas de poste trouvé" });
      }
      res.status(200).json({ posts: "✔️✔️✔️ 😃➖➖➖➖➖➖► Post trouvé" });
    })
    .then(() => {
      Post.destroy({
        where: { id: req.params.id },
      }).then(() => {
        console.log("✔️  ✔️  ✔️  😃➖➖➖➖➖➖► Post Supprimé");
      });
    });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
