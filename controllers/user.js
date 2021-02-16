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

//* ✅ 👉 Connexion user.
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

exports.showUser = async (req, res, next) => {
  const userId = req.body.userId;

  // const user = await User.findOne({ where: { id: userId } });
  // if (user === null) {
  //   console.log("Not found!");
  // } else {
  //   console.log(user instanceof User);
  //   console.log(user.title);
  // }
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 mettre à jour le profil.
exports.upDateOneUser = async (req, res, next) => {
  const profil = await User.update(
    { lastName: "Doe" },
    {
      where: {
        lastName: null,
      },
    }
  );
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Supprimer un profil.
exports.destroyOneUser = async (req, res, next) => {
  await User.destroy({
    where: {
      alias: req.body.alias,
      email: req.body.email,
      firstname: req.body.firstname,
      name: req.body.name,
    },
  });
};
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
