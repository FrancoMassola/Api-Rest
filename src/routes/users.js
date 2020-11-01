const {Router} = require('express');
const router = Router();
const fetch = require ('node-fetch');

//node-fetch modulo para hacer una peticion a otro servicio desde Node.js
//peticion asincrona async entonces necesito usar el await para alclarar que la peticion va a llevar tiempo, entonces que espere await
router.get('/', async (req,res)=>{
 const response = await   fetch('https://jsonplaceholder.typicode.com/users');
 const users = await response.json(); //convertir String que estamos recibiendo a json 
 res.json(users);
});

module.exports = router;