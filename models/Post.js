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

    userId: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
  });

  return Post;
};
