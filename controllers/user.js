const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.users;
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Créer un user.
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      User.create({
        alias: req.body.alias,
        email: req.body.email,
        password: hash,
        name: req.body.name,
        firstname: req.body.firstname,
      })

        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => {
          console.log(error);
          return res.status(400).json({ error });
        });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Connexion d'un user.
exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user === null) {
      return res.status(404).json({ message: "utilisateur non trouvé" });
    } else {
      const valid = await bcrypt.compare(req.body.password, user.password);

      if (!valid) {
        return res.status(401).json({ error: "Mot de passe incorrect !" });
      }
      return res.status(200).json({
        userId: user.id,
        token: jwt.sign({ userId: user.id }, "RANDOM_TOKEN_SECRET", {
          expiresIn: "24h",
        }),
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Afficher un profil d'un utilisateur.
exports.findOne = (req, res, next) => {
  User.findOne({
    where: { id: req.params.id },
  }).then((users) => {
    if (!users) {
      return res.status(404).json({ error: "Pas de user trouvé" });
    }
    res.status(200).json({ users });
  });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Mettre à jour le profil.
exports.updateOne = (req, res, next) => {
  User.findOne({
    where: { id: req.params.id },
  })
    .then((users) => {
      if (!users) {
        return res.status(404).json({ error: "Pas de user trouvé" });
      }
      res.status(200).json({ users: "User trouvé" });
    })
    .then(() => {
      const values = {
        alias: req.body.alias,
        email: req.body.email,
        name: req.body.name,
        firstname: req.body.firstname,
      };
      const condition = { where: { id: req.params.id } };
      options = { multi: true };

      User.update(values, condition, options).then(function (upresult) {});
    });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Supprimer un profil.
// //* ✅ 👉 Supprimer un poste.
exports.deleteUser = (req, res) => {
  User.findOne({
    where: { id: req.params.id },
  })
    .then((users) => {
      if (!users) {
        return res
          .status(404)
          .json({ error: "❌❌❌ 😥➖➖➖➖➖➖► Pas de user trouvé" });
      }
      res.status(200).json({ users: "✔️✔️✔️ 😃➖➖➖➖➖➖► user trouvé" });
    })
    .then(() => {
      User.destroy({
        where: { id: req.params.id },
      }).then(() => {
        console.log("✔️  ✔️  ✔️  😃➖➖➖➖➖➖► user Supprimé");
      });
    });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
