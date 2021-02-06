const db = require("../models");
const User = db.post;
const fs = require("fs");
const { post } = require("../routes/comments");

/****************************************************************/

/****Create : créer un post****/
exports.createComments = (req, res, next) => {
  const commentsObject = JSON.parse(req.body.sauce);

  const comments = new Post({
    ...commentsObject,
  });

  comments.save(function (err, b) {
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
/*******************************************************************************/

/****Read : afficher les post****/
exports.getOnePost = (req, res, next) => {
  Comments.findOne({
    _id: req.params.id,
  })
    .then((comments) => {
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
exports.modifyComments = (req, res, next) => {
  Comments.updateOne(
    { _id: req.params.id },
    { ...commentsObject, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "comments modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};
/*******************************************************************************/

/****Delete : Supprimer un post****/
exports.deleteComments = (req, res, next) => {
  Comments.findOne({
    _id: req.params.id,
  })
    .then((comments) => {
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
exports.getAllSauces = (req, res, next) => {
  Comments.find()
    .then((comments) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

/*******************************************************************************/
