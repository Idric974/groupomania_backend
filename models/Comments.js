module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    comment: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },

    idUser: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
  });

  return Comment;
};
