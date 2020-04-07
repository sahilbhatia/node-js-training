module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('userInformations', {
    email: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    id: {
      type: Sequelize.INTEGER
    },
    mobile: {
      type: Sequelize.STRING
    }
  });

  return User;
};
