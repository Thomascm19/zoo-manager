const packege = require('../models/packege')
const mongoose = require('mongoose');
const Client = mongoose.model('Client');
const packegeController = {};

//Obtiene un solo paquete
packegeController.getPackege = async(req, res) => {
        Client.forEach(element => {
            packege.find({}, function(err, packege) {
                let populeteQuery = [{ path: "client" }];
                Client.populate(packege, populeteQuery, function(err, packege) {
                    res.json(packege)
                })
            })
        });
    }
    //Crea un nuevo paquete
packegeController.createPackege = async(req, res) => {
    const savePackege = new packege({
        name: req.body.name,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        client: req.body.firstClientSelected
    });
    await savePackege.save()
    res.json({
        'status': 'packege Save'
    })
};

//Edita un solo paquete por id
packegeController.editPackege = async(req, res) => {
    const { id } = req.params;
    const editPackege = {
        name: req.body.name,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        clientName: req.body.client.name,
        clientEdad: req.body.client.lastName
    }
    await packege.findByIdAndUpdate(id, { $set: editPackege }, { new: true });
    res.json({
        status: 'Packege update'
    })
};

//Elimina un solo paquete por el id 
packegeController.deletePackege = async(req, res) => {
    const { id } = req.params.id;
    await packege.findByIdAndDelete(id);
    res.json({
        status: 'Packege Delete'
    })
};

module.exports = packegeController;