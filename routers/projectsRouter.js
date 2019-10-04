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

module.exports = router;