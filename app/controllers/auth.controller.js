const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    namalengkap: req.body.namalengkap,
    alamat: req.body.alamat,
    kontak: req.body.kontak,
    jeniskelamin: req.body.jeniskelamin,
    hobi: req.body.hobi,
    kota: req.body.kota,
    suasana: req.body.suasana,
  })
    .then(user => {
      res.send({
        /*id: user.id,
        username: user.username,
        email: user.email,
        namalengkap: user.namalengkap,
        alamat: user.alamat,
        kontak: user.kontak,
        jeniskelamin: user.jeniskelamin,
        hobi: user.hobi,*/
        message: "User was registered successfully!"
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      
      res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        namalengkap: user.namalengkap,
        alamat: user.alamat,
        kontak: user.kontak,
        jeniskelamin: user.jeniskelamin,
        hobi: user.hobi,
        kota: user.kota,
        suasana: user.suasana,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};