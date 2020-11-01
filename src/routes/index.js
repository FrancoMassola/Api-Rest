const { Router } = require ('express');
const router = Router();


router.get('/test', (req, res) => {

    const data = {
        "name": "Franco",
        "apellido": "Massola"
    }

    res.json({data});
});

module.exports = router;