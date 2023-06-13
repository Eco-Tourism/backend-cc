const db = require("../models");
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  
  // Validasi Username
  if (!req.body.username || req.body.username.trim() === "") {
    return res.status(400).send({
      message: "Failed! Username is required!"
    });
  }

  // Validasi Email
  if (!req.body.email || req.body.email.trim() === "") {
    return res.status(400).send({
      message: "Failed! Email is required!"
    });
  }

  // cek duplikat Username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }

    // cek duplikat Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      // Password
      if (!req.body.password) {
        res.status(400).send({
          message: "Failed! password is required!"
        });
        return;
      }

      // Nama Lengkap
      if (!req.body.namalengkap) {
        res.status(400).send({
          message: "Failed! full name is required!"
        });
        return;
      }

      // Alamat
      if (!req.body.alamat) {
        res.status(400).send({
          message: "Failed! address is required!"
        });
        return;
      }

      // Kontak
      if (!req.body.kontak) {
        res.status(400).send({
          message: "Failed! contact is required!"
        });
        return;
      }

      // Jeniskelamin
      if (!req.body.jeniskelamin) {
        res.status(400).send({
          message: "Failed! gender is required!"
        });
        return;
      }

      next();
    });
  });
};


const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;