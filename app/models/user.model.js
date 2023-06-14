module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      namalengkap: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      kontak: {
        type: Sequelize.STRING
      },
      jeniskelamin: {
        type: Sequelize.STRING
      },
      hobi: {
        type: Sequelize.STRING
      },
      kota: {
        type: Sequelize.INTEGER
      },
      suasana: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };