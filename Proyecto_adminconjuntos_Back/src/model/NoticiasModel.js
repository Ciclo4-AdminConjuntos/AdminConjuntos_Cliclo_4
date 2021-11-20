const mongoose = require("mongoose");

const NoticiaSchema = mongoose.Schema({
  idNoticia: String,
  titulo: String,
  cuerpo: String,
  fecha: {type:Date, default: Date.now}
});

module.exports = mongoose.model("Noticia", NoticiaSchema);