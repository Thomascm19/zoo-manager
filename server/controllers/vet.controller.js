const vet = require('../models/vet')
const vetController = {};

//Obtiene todos los empleados
vetController.getVets = async (req, res) => {
    const vets = await vet.find();
    res.json(vets)
};

//Crea un nuevo empleado
vetController.createVet = async (req, res) => {
    const saveVet = new vet({
        name: req.body.name,
        lastName: req.body.lastName
    });
    await saveVet.save()
    res.json({
        'status': 'Vet Save'
    })
};

//Obtiene un solo empleado
vetController.getVet = async (req, res) => {    
    const showVet = await vet.findById(req.params.id);
    res.json(showVet);
};

//Edita un empleado por id
vetController.editVet = async (req, res) => {
    const { id } = req.params;
    const editVet = {
        name: req.body.name,
        lastName: req.body.lastName
    }
   await vet.findByIdAndUpdate(id, {$set: editVet}, {new: true});
    res.json({
        status: 'vet update'
    })
};

//Elimina un empleado por el id
vetController.deleteVet = async(req, res) => {
    const { id } = req.params;
    await vet.findByIdAndRemove(id);
    res.json({
        status: 'vet Delete'
    });
};

module.exports = vetController;