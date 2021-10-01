const express = require('express');
const router = express.Router();

//retonar tudo
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'GET pedidos'
    });
});

//insere
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'POST pedidos'
    });
});

//retorna dados
router.get('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_pedidos

    if (id == 'especial'){
        res.status(200).send({
            mensagem: 'deus me ajuda pedidos',
            id_pedidos: id
        });
    }
    else{
        res.status(200).send({
            mensagem: 'tenha misericórdia pedidos'
        }); 
    }
});

//exclui
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'delete pedidos'
    });
});

module.exports = router;