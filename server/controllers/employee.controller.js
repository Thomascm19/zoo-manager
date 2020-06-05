const employee = require('../models/employee')
const employeeController = {};

//Obtiene todos los empleados
employeeController.getEmployees = async (req, res) => {
    const employees = await employee.find();
    res.json(employees)
};

//Crea un nuevo empleado
employeeController.createEmployees = async (req, res) => {
    const saveEmployee = new employee({
        name: req.body.name,
        lastName: req.body.lastName
    });
    await saveEmployee.save()
    res.json({
        'status': 'Employee Save'
    })
};

//Obtiene un solo empleado
employeeController.getEmployee = async (req, res) => {    
    const showEmployee = await employee.findById(req.params.id);
    res.json(showEmployee);
};

//Edita un empleado por id
employeeController.editEmployee = async (req, res) => {
    const { id } = req.params;
    const editEmployee = {
        name: req.body.name,
        lastName: req.body.lastName
    }
   await employee.findByIdAndUpdate(id, {$set: editEmployee}, {new: true});
    res.json({
        status: 'Employee update'
    })
};

//Elimina un empleado por el id
employeeController.deleteEmployees = async(req, res) => {
    const { id } = req.params;
    await employee.findByIdAndRemove(id);
    res.json({
        status: 'Employee Delete'
    });
};

module.exports = employeeController;