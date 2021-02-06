const db = require("../models");
const User = db.post;
const fs = require("fs");
const { post } = require("../routes/post");

/****************************************************************/

/****Create : créer un post****/
exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.params.post);
  console.log(postObject);
  const post = new Post({
    ...postObject,
  });

  post.save(function (err, b) {
    if (err) {
      console.log("#########", err);
      res.status(400).json({
        error: err,
      });
    } else {
      console.log(b);
      res.status(201).json({
        message: "Post crée!",
      });
    }
  });
};

/****Read : afficher les post****/
exports.getOnePost = (req, res, next) => {
  Sauces.findOne({
    _id: req.params.id,
  })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};
/*******************************************************************************/

/****Update : mettre à jour un post****/
exports.modifyPost = (req, res, next) => {
  Sauces.updateOne(
    { _id: req.params.id },
    { ...postObject, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Post modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};
/*******************************************************************************/

/****Delete : Supprimer un post****/
exports.deletePost = (req, res, next) => {
  Post.findOne({
    _id: req.params.id,
  })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};
/*******************************************************************************/

/****Afficher tous les post****/
exports.getAllPost = (req, res, next) => {
  Post.find()
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

/*******************************************************************************/
