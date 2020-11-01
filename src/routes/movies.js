const {Router} = require ('express');
const router = Router();

const _ = require('underscore');
const { route } = require('.');

const movies = require("../example.json");


router.get("/", (req,res) => {

    res.json(movies);

});

router.post("/", (req,res) =>{
    const { title,director,year, rating } = req.body; //datos que recibo por consulta 
    
    if (title &&director&&year&&rating) {
        //le agrego el id al objeto movies
        const id = movies.length + 1;
        const new_movie = {...req.body,id}; //envio todo lo que tiene el request body dentro de un nuevo objeto
        console.log(new_movie);
        movies.push(new_movie);
        res.json(movies); //a las aplicaciones clientes le envio las nuevas peliculas
    }
    else {
        res.status(500).json({error: 'there was an error'});
    }
    res.send('received');
});

//actualizar
router.put('/:id',(req,res)=>{
    const {id} = req.params; //id de consulta
    const { title,director,year, rating } = req.body; //datos que recibo por consulta

    if(title&&director&&year&&rating){

        _.each(movies,(movie,i)=>{
            if(movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });

        res.json(movies);

    }
    else {
        res.status(500).json({error: 'There was an error'});
    }

});

//Se envia el id para eliminar
router.delete('/:id', (req,res) => {
    const {id} = req.params;

    _.each(movies, (movie,i) =>{
        if(movie.id==id){
            movies.splice(i,1); //elimina la pelicula que coincida con el id y elimina solo 1
        }
    });
    res.send(movies);

})


module.exports = router;