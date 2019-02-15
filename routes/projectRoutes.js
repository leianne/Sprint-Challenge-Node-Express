const express = require('express');
const db = require('../data/helpers/projectModel');
const router = express();

router.post('/', async (req, res) => {
    const project = req.body
    console.log(project)
    try {
        const newProject = await db.insert(project)
        if(newProject) {
            res.status(201).json({ message: "your project was created" })
        } else {
            res.status(404).json({ message: "there is an issue with the info you sent" })
        }
    }
    catch(error) {
        res.status(500).json({ message: "nott working!!!!"})
    }
})
router.get('/', async (req, res) => {
    try {
        const projects = await db.get()
        if(projects) {
            res.status(200).json(projects)
        } else {
            res.status(404).json({ message: "not working@"})
        }
    }
    catch(error) {
        res.status(500).json({ message: "nott working!!!!"})
    }
})

router.get('')
module.exports = router;