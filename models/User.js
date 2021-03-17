module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    alias: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },

    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    name: {
      type: Sequelize.STRING,
    },

    firstname: {
      type: Sequelize.STRING,
    },

    admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  return User;
};
