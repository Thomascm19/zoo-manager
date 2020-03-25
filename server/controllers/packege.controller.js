const packege = require('../models/packege')
const mongoose = require('mongoose');
const Client = mongoose.model('Client');
const packegeController = {};

//Obtienen todos los paquetes
packegeController.getPackeges = async(req, res) => {
    packegeController.find({}, function(err, packege) {
        Client.populate(packege, { path: "client" }, function(err, geographical) {
            res.json(packege)
        })
    })

};

//Crea un nuevo paquete
packegeController.createPackege = async(req, res) => {
    const savePackege = new packege({
        name: req.body.packegeName,
        precio: req.body.packegePrecio,
        descripcion: req.body.packegeDescripcion,
        clientName: req.body.client.name,
        clientEdad: req.body.client.lastName
    });
    await savePackege.save()
    res.json({
        'status': 'packege Save'
    })
};

//Obtiene un solo paquete
packegeController.getPackege = async(req, res) => {
    const showPackege = await packege.findById(req.params.id)
    res.json(showPackege);
}

//Edita un solo paquete por id
packegeController.editPackege = async(req, res) => {
    const { id } = req.params;
    const editPackege = {
        name: req.body.packegeName,
        precio: req.body.packegePrecio,
        descripcion: req.body.packegeDescripcion,
        clientName: req.body.client.name,
        clientEdad: req.body.client.lastName
    }
    await packege.findOneAndUpdate(id, { $set: editPackege }, { new: true });
    res.json({
        status: 'Packege update'
    })
};

//Elimina un solo paquete por el id 
packegeController.deletePackege = async(req, res) => {
    const { id } = req.params.id;
    await packege.findOneAndDelete(id);
    res.json({
        status: 'Packege Delete'
    })
};

module.exports = packegeController;