const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs')

const UsuarioSchema = mongoose.Schema({
  cedula: {
   type:String,
   unique: true,
   require:true
  },
  password: {
    type:String,
    require:true
  },
  "tipoUsuario": Number,
  "informacion":Object	  
});

UsuarioSchema.pre("save", function (next) {
  const user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UsuarioSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('Usuario', UsuarioSchema);