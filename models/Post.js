module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    title: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    date: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    idUser: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    idComment: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
  });

  return Post;
};
