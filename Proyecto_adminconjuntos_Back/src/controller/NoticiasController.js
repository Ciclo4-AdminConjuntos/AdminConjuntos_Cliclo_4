const NoticiaModel = require("../model/NoticiasModel")

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


module.exports = class NoticiasController {
  getToken= function(headers){
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
  
  static async getAll(request, response) {
    try {
      const token= getToken(request.headers)
      if(token){
      const result = await NoticiaModel.find().sort({fecha:-1});
      response.status(200).json(result);
    }else{
      return response.status(401).send({success: false, msg:'No esta autorizado!'})
    }
    } catch (err) {
      response.status(404).json({message: err.message});
    }
  }

  static async getById(request, response) {
    try {
      const id = request.params.id;
      const result = await NoticiaModel.findOne({_id: id});
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
      await NoticiaModel.deleteOne({_id: id});
      response.status(200).json();
    } catch (err) {
      response.status(400).json({message: err.message})
    }
  }

  static async create(request, response){
    try {
      const document = request.body;
      const newRestaurant = await NoticiaModel.create(document);
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
      const respuesta= await NoticiaModel.findByIdAndUpdate(_id,document,{new:true});
      //await NoticiaModel.updateOne({"_id": id}, {$set: {"borough": val}});
      response.status(200).json();
    } catch (err) {
      response.status(400).json({message: err.message})
    }
  }

  
}