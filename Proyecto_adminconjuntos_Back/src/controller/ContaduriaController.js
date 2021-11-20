const Contaduria = require("../model/ContaduriaModel")

const getToken= function(headers){
  if(headers && headers.authorization){
    const parted=headers.authorization.split(' ')
    if(parted.length===2){
      return parted[1]
    }else{
      return null
    }
  }else{
    return null
  }
}

module.exports = class ContaduriaModel {
  static async getAll(request, response) {
    try {
      const token= getToken(request.headers)
      if(token){
      const result = await Contaduria.find();
      response.status(200).json(result);
    }else{
      return response.status(403).send({success: false, msg:'No esta autorizado!'})
    }
    } catch (err) {
      response.status(404).json({message: err.message});
    }
  }
  static async getById(request, response) {
    try {
      const id = request.params.id;
      const result = await Contaduria.findOne({Cedula: id});
      if (result != null) {
        response.status(200).json(result)
      } else {
        response.status(404).json();
      }
    } catch (err) {
      response.status(400).json({message: err.message})
    }
  }

  static async getByFecha(request, response) {
    try {
      const fechaIni = request.params.fechaIni;
      const fechaFin = request.params.fechaFin;
      const result = await Contaduria.find({"Fecha": { $gte: fechaIni, $lte: fechaFin}});
      if (result != null) {
        response.status(200).json(result)
      } else {
        response.status(404).json();
      }
    } catch (err) {
      response.status(400).json({message: err.message})
    }
  }

  static async deleteById(request, response){
    try {
      const id = request.params.id;
      await Contaduria.deleteOne({_id: id});
      response.status(200).json();
    } catch (err) {
      response.status(400).json({message: err.message})
    }
  }

  static async create(request, response){
    try {
      const document = request.body;
      const newRestaurant = await Contaduria.create(document);
      response.status(201).json(newRestaurant);
    } catch (err) {
      response.status(400).json({message: err.message})
    }
  }

  static async updateById(request, response) {
    try {
      const _id = request.params.id;
      const val = request.params.val;
      const document = request.body;
      const respuesta= await Contaduria.findByIdAndUpdate(_id,document,{new:true});
      //await Contaduria.updateOne({"_id": id}, {$set: {"borough": val}});
      response.status(200).json(respuesta);
    } catch (err) {
      response.status(400).json({message: err.message})
    }
  }
}