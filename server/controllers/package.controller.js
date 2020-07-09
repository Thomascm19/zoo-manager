const package = require('../models/package')
const mongoose = require('mongoose');
const Client = mongoose.model('Client');
const packageController = {};

//Obtiene todos los empleados
packageController.getPackages = async (req, res) => {
    package.find({}, function(err, package){
        let populeteQuery = [{path: "client"}];
        Client.populate(package, populeteQuery, function(err, package){
            res.json(package)
          });
    });
};

//Crea un nuevo empleado
packageController.createPackage = async (req, res) => {
    const savePackage = new package({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        client: req.body.client
    });
    await savePackage.save()
    res.json({
        'status': 'Package Save'
    })
};

//Obtiene un solo empleado
packageController.getPackage = async (req, res) => {    
    const showPackage = await package.findById(req.params.id);
    res.json(showPackage);
};

//Edita un empleado por id
packageController.editPackage = async (req, res) => {
    const { id } = req.params;
    const editPackage = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        client: req.body.client
    }
   await package.findByIdAndUpdate(id, {$set: editPackage}, {new: true});
    res.json({
        status: 'Package update'
    })
};

//Elimina un empleado por el id
packageController.deletePackage = async(req, res) => {
    const { id } = req.params;
    await package.findByIdAndRemove(id);
    res.json({
        status: 'Package Delete'
    });
};

module.exports = packageController;