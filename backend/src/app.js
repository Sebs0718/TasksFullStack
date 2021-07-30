const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//connecting to db
mongoose.connect('mongodb://localhost/toDo')
    .then(db => console.log('connected'))
    .catch(err => console.log(err));

//importing routes
const tasksRoutes = require('./routes/task.routes');

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use('/api/task', tasksRoutes);



//starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});