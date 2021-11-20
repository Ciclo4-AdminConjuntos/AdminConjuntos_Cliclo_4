const Usuario = require("../model/UsuariosModel");
const jwt = require("jsonwebtoken");
const settings = require("../../config/settings");
const passport = require("passport");
require("../../config/passport")(passport);

module.exports = class AuthModel {
  static async login(request, response) {
    Usuario.findOne({ cedula: request.body.cedula }, function (err, Usuario) {
      if (err) throw err;
      if (!Usuario) {
        response
          .status(401)
          .send({
            succes: false,
            msg: `autentificacion fallida. El Usuario ${request.body.cedula} no existe`,
          });         
      } else {
        Usuario.comparePassword(request.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            const token = jwt.sign(Usuario.toJSON(), settings.secret);
            response.json({ succes: true, token: "JWT " + token });
          } else {
            response
              .status(401)
              .send({
                succes: false,
                msg: `autentificacion fallida. El el password es incorrecto!`,
              });
          }
        });
      }
    });
  }
};
