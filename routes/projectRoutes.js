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

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const project = await db.get(id)
        if(project) {
            res.status(200).json(project)
        } else {
            res.status(404).json({ message: "we cant find that project "})
        }
    }
    catch(error) {
        res.status(500).json({ message: "nott working!!!!"})
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const updates = req.body
    try {
        const updatedPost = await db.update(id, updates)
        if(updatedPost) {
            res.status(202).json(updatedPost)
        } else {
            res.status(404).json({ message: "we cant find that project "})
        }
    }
    catch(error) {
        res.status(500).json({ message: "nott working!!!!"})
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const deleted = await db.remove(id);
        if(deleted) {
            res.status(202).json({ message: "project deleted"})
        } else {
            res.status(204)/json({ message: "we cant find that project "})
        }
    }
    catch(error) {
        res.status(500).json({ message: "nott working!!!!"})
    }
})

module.exports = router;