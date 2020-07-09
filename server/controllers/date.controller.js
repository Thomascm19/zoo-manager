const date = require('../models/date')
const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');
const Vet = mongoose.model('Vet');
const dateController = {};

//Obtienen todas las zonas geograficas
dateController.getDates = async (req, res) => {
    date.find({}, function(err, date){
        let populeteQuery = [{path: "animal"}];
        let populate = [{path: "vet"}];
        Animal.populate(date, populeteQuery, function(err, date){
            Vet.populate(date, populate, function(err, date){
                res.json(date)
            })
          });
    });
};

//Crea una nueva zona geografica
dateController.createDate = async (req, res) => {
    const saveDate = new date({
        vet: req.body.vetSelected,
        animal: req.body.animalSelected,
        description: req.body.description
    });
    await saveDate.save()
    res.json({
        'status': 'Date Save'
    })
};

//Obtiene una sola zonas geografica
dateController.getDate = async (req, res) => {
    const showDate = await date.findById(req.params.id)
    res.json(showDate);
}

//Edita una sola zonas geografica por id
dateController.editDate = async(req, res) => {
    const { id } = req.params;
    const editZoo = {
        vet: req.body.vetSelected,
        animal: req.body.animalSelected,
        description: req.body.description
    }    
    await date.findByIdAndUpdate(id, {$set: editZoo}, {new: true});
        res.json({
            status: 'Date Area update'
        })
};

//Elimina una sola zona geografica por el id 
dateController.deleteDate = async (req, res) =>{
    const { id } = req.params;
    await date.findByIdAndRemove(id);
    res.json({
        status: 'Date Area Delete'
    })
};

module.exports = dateController;