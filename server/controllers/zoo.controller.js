const zoo = require('../models/zoo')
const zooController = {};

//Se obtiene el zoologico
zooController.getZoo = async(req, res) => {
    const zoos = await zoo.find();
    res.json(zoos)
};
zooController.createZoo = async(req, res) => {
    const saveZoo = new zoo({
        name: req.body.name,
        nit: req.body.nit
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
    await zoo.findOneAndUpdate(id, { $set: editZoo }, { new: true });
    res.json({
        status: 'zoo update'
    })
};

//Se elimina el zoologico
zooController.deletezoo = async(req, res) => {
    const { id } = req.params.id;
    await zoo.findOneAndDelete(id);
    res.json({
        status: 'Zoo Delete'
    });
};

module.exports = zooController;