const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'GET registro'
    });
});

router.post('/', (req, res, next) => {
    /*
    const registro = {
        nome: req.body.nome,
        email: req.body.email,
        estado: req.body.estado,
        senha: req.body.senha
    }*/

    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO conta (nome, email, estado, senha) VALUES (?,?,?,?)',
            [req.body.nome, req.body.email, req.body.estado, req.body.senha],
            (error, resultado, field) => {
                conn.release();

                if(error){
                    return res.status(500).send({
                        error : error,
                        response : null
                    });
                }
                res.status(201).send({
                    mensagem: 'Produto inserido com sucesso',
                    id_registro : resultado.insertId
                });
            }
        )
    });
});

module.exports = router;