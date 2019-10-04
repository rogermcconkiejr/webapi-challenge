const express = require('express');
const projectModel = require('../data/helpers/projectModel.js');

const router = express.Router();

router.get('/', (req, res)=>{
    projectModel
    .get()
    .then(projects=>{
        res.json(projects)
    })
    .catch(error=>{
        res.status(500).json({ errorMessage: "Project data could not be retrieved."})
    })
})

router.post('/', (req, res)=>{
    const projectBody = req.body;
    projectModel
    .insert(projectBody)
    .then(project=>{
        res.status(201).json(project)
    })
    .catch(error=>{
        res.status(500).json({ errorMessage: "Project could not be created."})
    })
})

router.put('/:id', (req, res)=>{
    const id = req.params.id;
    const changes = req.body;
    projectModel
    .update(id, changes)
    .then(project=>{
        res.status(201).json(project)
    })
    .catch(error=>{
        res.status(500).json({ errorMessage: "Project could not be updated."})
    })
})

router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    projectModel
    .remove(id)
    .then(project=>{
        res.status(204).json(project)
    })
    .catch(error=>{
        res.status(500).json({ errorMessage: "Project could not be removed."})
    })
})

router.get('/:id', (req, res)=>{
    const id = req.params.id;
    projectModel
    .getProjectActions(id)
    .then(project=>{
        res.status(200).json(project)
    })
    .catch(error=>{
        res.status(500).json({ errorMessage: "Actions from project could not be returned."})
    })
})
module.exports = router;