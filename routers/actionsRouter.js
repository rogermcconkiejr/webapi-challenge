const express = require('express');
const actionModel = require('../data/helpers/actionModel.js');
const projectModel = require('../data/helpers/projectModel.js');

const router = express.Router();

router.get('/', (req, res)=>{
    actionModel
    .get()
    .then(action=>{
        res.status(200).json(action)
    })
    .catch(error=>{
        res.status(500).json({ errorMessage: "Actions could not be displayed."})
    })
})

router.get('/:id', (req, res)=>{
    const id = req.params.id
    actionModel
    .get(id)
    .then(action=>{
        if (!action) {
        res.status(404).json({ errorMessage: "The action with that specified ID doesn't exist."})
        } else {
        res.status(201).json(action)
        }
    })
    .catch(error=>{
        res.status(500).json({ errorMessage: "Action could not be displayed."})
    })
})

router.put('/:id', (req, res)=>{
    const id = req.params.id;
    const changes = req.body;
    actionModel
    .update(id, changes)
    .then(action=>{
        if (!action) {
        res.status(404).json({ errorMessage: "The action with that specified ID doesn't exist."})
        } else {
        res.status(201).json(action)
        }
    })
    .catch(error=>{
        res.status(500).json({ errorMessage: "Action could not be updated."})
    })
})

router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    actionModel
    .remove(id)
    .then(action=>{
        if (!action) {
        res.status(404).json({ errorMessage: "The action with that specified ID doesn't exist."})
        } else {
        res.status(204).json(action)
        }
    })
    .catch(error=>{
        res.status(500).json({ errorMessage: "Action could not be removed."})
    })
})


module.exports = router;
