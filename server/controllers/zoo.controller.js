const zoo = require('../models/zoo')
const mongoose = require('mongoose');
const GeographicalArea = mongoose.model('GeographicalArea');
const zooController = {};

//Se obtiene el zoologico
zooController.getZoo = async(req, res) => {    
    zoo.find({}, function(err, zooParam){
        GeographicalArea.populate(zooParam, {path: "geographicalArea"}, function(err, zooParam){
            res.json(zooParam)
        })
    })
};

zooController.createZoo = async(req, res) => {
    const saveZoo = new zoo({
        name: req.body.name,
        nit: req.body.nit,
        geographicalArea: req.body.geographicalArea
    });
    await saveZoo.save()
    res.json({
        'status': 'Zoo Save'
    })
};
//Se edita el zoologico
zooController.editZoo = async(req, res) => {
    const { id } = req.params;
    const editZoo = {
        name: req.body.name,
        nit: req.body.nit
    }
    await zoo.findByIdAndUpdate(id, { $set: editZoo }, { new: true });
    res.json({
        status: 'zoo update'
    })
};

//Se elimina el zoologico
zooController.deleteZoo = async(req, res) => {
    const { id } = req.params.id;
    await zoo.findByIdAndRemove(id);
    res.json({
        status: 'Zoo Delete'
    });
};

module.exports = zooController;