const express = require('express');
const router = express.Router();

//retonar tudo
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'GET produtos'
    });
});

//insere
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'POST produtos'
    });
});

//retorna dados
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id == 'especial'){
        res.status(200).send({
            mensagem: 'deus me ajuda',
            id: id
        });
    }
    else{
        res.status(200).send({
            mensagem: 'tenha misericórdia'
        }); 
    }
});

//altera
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'patch produtos'
    });
});

//exclui
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'delete produtos'
    });
});

module.exports = router;