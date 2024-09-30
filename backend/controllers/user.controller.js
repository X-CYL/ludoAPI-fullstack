const userModel = require("../models/user.model")

module.exports.getUsers = async (req, res) =>{
    const user = await userModel.find();
    res.status(200).json(user);
};

module.exports.setUsers = async (req, res) => {
    if(!req.body.message){
       // res.status(400).json({message: "merci d'entrer un utilisateur"})
    }

    const user = await userModel.create({
        name: req.body.name,
        surname: req.body.surname,
        pseudo: req.body.pseudo
    })
    res.status(200).json(user)
};

module.exports.editUsers = async (req, res) =>{
    const user = await userModel.findById(req.params.id)

    if(!user){
        res.status(400).json("cet utilisateur n'existe pas");
    }

    const updateUser = await userModel.findByIdAndUpdate(
        user,
        req.body,
        {new: true}
    )
    res.status(200).json(updateUser);
};

module.exports.deleteUsers = async (req, res) =>{
    const user = await userModel.findById(req.params.id)
    if(!user){
        res.status(400).json({message :"cet utilisateur n'existe pas"});
    }
    console.log(user);
    await user.deleteOne();
    res.status(200).json("utilisateur N° " + req.params.id + " supprimé");
};