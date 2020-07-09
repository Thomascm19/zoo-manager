const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }))

//Routes
app.use('/api/employees', require('./routes/employee.routes'));
app.use('/api/geographicalArea', require('./routes/geographicalArea.routes'));
app.use('/api/animals', require('./routes/animals.routes'));
app.use('/api/vet', require('./routes/vet.routes'));
app.use('/api/client', require('./routes/client.routes'));
app.use('/api/package', require('./routes/package.routes'));

//Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})