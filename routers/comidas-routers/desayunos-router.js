const express = require('express');
const router = express.Router();
const desayuno = require('../../models/comidas-models/desayunos');

// Obteniendo todos los desayunos
router.get('/', (req, res) => {
    desayuno.find()
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Mostrando todos los desayunos');
});

// Crear un desayuno
router.post('/', (req, res) => {
    let newDesayuno = new desayuno({
        nombre: req.body.nombre,
        precio: req.body.precio
    });

    newDesayuno.save()
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )

    console.log('Insertando nuevo desayuno');

});

// Actualizar desayuno
router.put('/:id', (req, res) => {
    desayuno.updateOne(
        {
            _id: req.params.id
        },
        {
            nombre: req.body.nombre,
            precio: req.body.precio
        }
    ).then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )
});

// Eliminando un desayuno
router.delete('/:id', (req, res) => {
    desayuno.deleteOne({ _id: req.params.id })
    .then( (result) => {
        res.send(result);
        res.end();
    } )
    .catch( (error) => {
        res.send(error);
        res.end();
    } )
})

module.exports = router;
