module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
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

  return Comment;
};
