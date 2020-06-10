const client = require('../models/client')
const clientController = {};

//Obtiene todos los clientes
clientController.getClients = async(req, res) => {
    const clients = await client.find();
    res.json(clients)
};

//Crea un nuevo cliente
clientController.createClients = async(req, res) => {
    const saveClient = new client({
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age,
        dni: req.body.dni,
        email: req.body.email
    });
    await saveClient.save()
    res.json({
        'status': 'Client Save'
    })
};

//Obtiene un solo cliente
clientController.getClient = async(req, res) => {
    const showClient = await client.findById(req.params.id);
    res.json(showClient);
};

//Edita un cliente por id
clientController.editClient = async(req, res) => {
    const { id } = req.params;
    const editClient = {
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age,
        dni: req.body.dni,
        email: req.body.email
    }
    await client.findByIdAndUpdate(id, { $set: editClient }, { new: true });
    res.json({
        status: 'Client update'
    })
};

//Elimina un cliente por el id
clientController.deleteClients = async(req, res) => {
    const { id } = req.params;
    await client.findByIdAndDelete(id);
    res.json({
        status: 'Client Delete'
    });
};

module.exports = clientController;