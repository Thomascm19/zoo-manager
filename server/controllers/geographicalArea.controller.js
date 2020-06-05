const geographicalArea = require('../models/geographicalArea')
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');
const geographicalAreaController = {};

//Obtienen todas las zonas geograficas
geographicalAreaController.getGeographicalAreas = async (req, res) => {
    geographicalArea.find({}, function(err, geographical){
        Employee.populate(geographical, {path: "employee"}, function(err, geographical){
            res.json(geographical)
        })
    })
    // const geographicalAreas = await geographicalArea.find();
    // res.json(geographicalAreas)
};

//Crea una nueva zona geografica
geographicalAreaController.createGeographicalArea = async (req, res) => {
    const saveGeographicalArea = new geographicalArea({
        name: req.body.geographicalAreaName,
        employeeName: req.body.employee.name,
        employeeLastName: req.body.employee.lastName
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
        name: req.body.name
    }
    await geographicalArea.findByIdAndUpdate(id, {$set: editGeographicalArea}, {new: true});
        res.json({
            status: 'Geographical Area update'
        })
};

//Elimina una sola zona geografica por el id 
geographicalAreaController.deleteGeographicalArea = async (req, res) =>{
    const { id } = req.params.id;
    await geographicalArea.findByIdAndRemove(id);
    res.json({
        status: 'Geographical Area Delete'
    })
};

module.exports = geographicalAreaController;