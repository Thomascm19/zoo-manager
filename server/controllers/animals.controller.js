const animal = require('../models/animal')
const animalController = {};

// zooController.getZoo = async(req, res) => {    
//     zoo.find({}, function(err, zooParam){
//         GeographicalArea.populate(zooParam, {path: "geographicalArea"}, function(err, zooParam){
//             res.json(zooParam)
//         })
//     })
// };
//Se obtienen todos los animales
animalController.getAnimals = async (req, res) => {
    const animals = await animal.find();
    res.json(animals)
};

//Crea un nuevo animal
animalController.createAnimal = async(req, res) => {
    const saveAnimal = new animal({
        name: req.body.name,
        type: req.body.type,
        category: req.body.category,
        weight: req.body.weight,
        height: req.body.height
    });
    await saveAnimal.save()
    res.json({
        'status': 'Animal Save'
    })
};

//Obtiene un solo Animal
animalController.getAnimal = async (req, res) => {    
    const showAnimal = await animal.findById(req.params.id);
    res.json(showAnimal);
};


//Edita un animal
animalController.editAnimal = async (req, res) => {
    const { id } = req.params;
    const editAnimal = {
        name: req.body.name,
        type: req.body.type,
        category: req.body.category,
        weight: req.body.weight,
        height: req.body.height
    }
   await animal.findByIdAndUpdate(id, {$set: editAnimal}, {new: true});
    res.json({
        status: 'Animal update'
    })
};

//Elimina un Animal por el id
animalController.deleteAnimal = async(req, res) => {
    const { id } = req.params;
    await animal.findByIdAndRemove(id);
    res.json({
        status: 'Animal Delete'
    });
};


module.exports = animalController;