const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.users;

//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Creat an user.
exports.signup = (req, res) => {
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

//* ✅ 👉 Log an user.
exports.login = async (req, res) => {
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

//* ✅ 👉 Show user profil.

exports.findOne = (req, res) => {
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

//* ✅ 👉 Update profil.

exports.updateOne = (req, res) => {
  User.findOne({
    where: { id: req.params.id },
  })
    .then((users) => {
      if (!users) {
        return res.status(404).json({ error: "Pas de user trouvé" });
      }
      res.status(200).json({ users: "User updated" });
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

//* ✅ 👉 Delete user.

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

//* ✅ 👉 Find userId.

exports.userId = (req, res) => {
  const token = req.params.token;

  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");

  console.log("✔️  Logged User Id ====> ", decodedToken.userId);

  const userId = decodedToken.userId;

  res.status(200).json({
    status: "✔️  ✔️ ✔️  UserId from backend ====> ",
    data: userId,
  });
};

//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//* ✅ 👉 Find userId.
exports.userInfo = (req, res) => {
  const token = req.params.token;

  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");

  console.log("✔️  USER INFO ====> ", decodedToken.userId);

  const userId = decodedToken.userId;

  User.findOne({
    where: { id: userId },
  }).then((users) => {
    if (!users) {
      return res.status(404).json({ error: "Pas de user trouvé" });
    }
    res.status(200).json({ users });
  });
};
