const db = require("../models/Post");
const User = db.post;
const fs = require("fs");
const { post } = require("../routes/User");

//* ✅ 👉 Créer un poste.

exports.createPost = (req, res, next) => {
  post
    .create({
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId,
    })

    .then(() => res.status(201).json({ message: "Post créé 😃!" }))
    .catch((error) => {
      console.log(error);
      return res.status(400).json({ error });
    });
};

//* ✅ 👉 Créer un commentaire.
// exports.Post = (req, res, next) => {
//   Comment.create({
//     title: req.body.title,
//     content: req.body.content,
//     userId: req.body.userId,
//   })

//     .then(() => res.status(201).json({ message: "Post créé 😃!" }))
//     .catch((error) => {
//       console.log(error);
//       return res.status(400).json({ error });
//     });
// };
