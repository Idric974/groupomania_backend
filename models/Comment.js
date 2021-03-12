module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    comment: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Comment;
};
