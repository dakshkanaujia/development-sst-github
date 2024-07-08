const userModel = require("../models/user")


exports.createUser = async (req, res) => {
    await userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
 
   return res.status(201).json({ message: "User Created" });
}


 exports.getallUsers = async(req , res)=>{
    const allModels = await userModel.find({})
 
    return res.json(allModels)
 }


 exports.getById = async(req , res)=>{
    const user = await userModel.findById(req.params.id)
   
    return res.json(user)
   }


   exports.updateUser = async(req , res)=>{
    const updatedUser = await userModel.findByIdAndUpdate(req.params.id , req.body)
    return res.json(updatedUser)
  }

  exports.deleteUser = async(req , res)=>{
    const deletedUser = await userModel.findByIdAndDelete(req.params.id)
  
    res.json(deletedUser)
  }
 