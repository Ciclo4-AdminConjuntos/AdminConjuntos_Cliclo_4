require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "site")))

app.use(express.urlencoded({extended: true}))

// rutas


if (process.env.NODE_ENV === 'production'){
  app.use("/api", require("./src/routes/routes"))
  app.use(express.static(__dirname+'/site'))
  app.use('*',(req,res)=>{
    res.sendFile(__dirname + '/site/index.html')
  })
}


// DB
const mongoose = require("mongoose");
mongoose.connect(process.env.URI_DB)
  .then(() => console.log("Conexión OK con DB"))
  .catch(err => console.error(err));

const port = process.env.PORT;
app.listen(port, () => 
  console.log(`La aplicación esta escuchando en http://localhost:${port}`)
)
