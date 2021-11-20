const mongoose = require("mongoose");

const ContaduriaSchema = mongoose.Schema({
  "idPago": String,
  "Cedula": Number,
  "Fecha": Date,
  "Monto": String 
});

module.exports = mongoose.model("Contaduria", ContaduriaSchema);