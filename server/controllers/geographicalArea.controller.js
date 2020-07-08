const geographicalArea = require('../models/geographicalArea')
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');
const geographicalAreaController = {};

//Obtienen todas las zonas geograficas
geographicalAreaController.getGeographicalAreas = async (req, res) => {
    geographicalArea.find({}, function(err, geographicalArea){
        let populeteQuery = [{path: "firstEmployee"}, {path: "secondEmployee"}, {path: "thirdEmployee"}, {path: "fourthEmployee"}];
        Employee.populate(geographicalArea, populeteQuery, function(err, geographicalArea){
            res.json(geographicalArea)
          });
    });
};

//Crea una nueva zona geografica
geographicalAreaController.createGeographicalArea = async (req, res) => {
    const saveGeographicalArea = new geographicalArea({
        name: req.body.geographicalAreaName,
        firstEmployee: req.body.firstEmployeeSelected,
        secondEmployee: req.body.secondEmployeeSelected,
        thirdEmployee: req.body.thirdEmployeeSelected,
        fourthEmployee: req.body.fourthEmployeeSelected
    });
    await saveGeographicalArea.save()
    res.json({
        'status': 'geographicalArea Save'
    })
};

//Obtiene una sola zonas geografica
geographicalAreaController.getGeographicalArea = async (req, res) => {
    const showGeographicalArea = await geographicalArea.findById(req.params.id)
    res.json(showGeographicalArea);
}

//Edita una sola zonas geografica por id
geographicalAreaController.editGeographicalArea = async(req, res) => {
    const { id } = req.params;
    const editGeographicalArea = {
        name: req.body.geographicalAreaName,
        firstEmployee: req.body.firstEmployeeSelected,
        secondEmployee: req.body.secondEmployeeSelected,
        thirdEmployee: req.body.thirdEmployeeSelected,
        fourthEmployee: req.body.fourthEmployeeSelected         
    }
    getAnimals(req);
    await geographicalArea.findByIdAndUpdate(id, {$set: editGeographicalArea}, {new: true});
        res.json({
            status: 'Geographical Area update'
        })
};

//Elimina una sola zona geografica por el id 
geographicalAreaController.deleteGeographicalArea = async (req, res) =>{
    const { id } = req.params;
    await geographicalArea.findByIdAndRemove(id);
    res.json({
        status: 'Geographical Area Delete'
    })
};


function objectMap(object, mapFn) {
    return Object.keys(object).reduce(function(result, key) {
      result[key] = mapFn(object[key])
      return result
    }, {})
  }
//Obtiene los animales
getAnimals = function(req) {
    let body = req.body;
    var newObject = objectMap(body, function(value) {
        let animals = Object.getOwnPropertyNames(value);
        return animals.substring(0,14);
      })      
}

module.exports = geographicalAreaController;