const employee = require('../models/employee')
const employeeController = {};

//Se obtienen todos los empleados
employeeController.getEmployees = async (req, res) => {
    const employees = await employee.find();
    res.json(employees)
};

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

//Se obtiene un solo empleado
employeeController.getEmployee = async (req, res) => {    
    const showEmployee = await employee.findById(req.params.id);
    res.json(showEmployee);
};

employeeController.editEmployee = async (req, res) => {
    const { id } = req.params;
    const editEmployee = {
        name: req.body.name,
        lastName: req.body.lastName
    }
   await employee.findOneAndUpdate(id, {$set: editEmployee}, {new: true});
    res.json({
        status: 'employee update'
    })
};

employeeController.deleteEmployees = async(req, res) => {
    const { id } = req.params.id;
    await employee.findOneAndDelete(id);
    res.json({
        status: 'Employee Delete'
    });
};

module.exports = employeeController;