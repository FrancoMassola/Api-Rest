const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
//Algunos servicios de internet te dan un puerto definido, en caso de que se quiera subir a un servicio de la nube que lo tome
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);

//middlewares
app.use(morgan('dev'));
//El formato json le permite a mi servidor empezar a recibir formatos json y entenderlos
app.use(express.json());
//Si existe una app externa y nos envia datos por un formulario por ejemplo usamos
//Entenderemos datos que vienen de imputs solamente por eso el atributo extended: false
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users',require('./routes/users'));

//starting the server
app.listen(app.get('port'), () => {
    
    console.log('Server on port' + app.get('port'));
});
