const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

const Usuario = require("../src/model/UsuariosModel");
const setting = require("../config/settings");

module.exports = function (passport) {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = setting.secret;
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      if (err) return done(err, false);
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
  );
};
