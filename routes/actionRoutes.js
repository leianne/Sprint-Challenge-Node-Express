const express = require('express');
const db = require('../data/helpers/actionModel')
const dbProjects = require('../data/helpers/projectModel');
const router = express();



router.post('/',  async (req, res) => {
    const project_id = req.body.project_id
    const description = req.body.description
    const notes = req.body.notes
    console.log(description.length)

    if(project_id && description.length <= 128 && notes !== '') {
        try {
            const newAction = db.insert(req.body)
            if(newAction) {
                res.status(201).json({ message: "your project was created" })
            }
         }
         catch(error) {
             res.status(500).json({ message: "nott working!!!!"})
             next()
         }
    } else {
        res.status(404).json({ message: "there is an issue with the info you sent" })
    }
    
})

router.get('/', async (req, res) => {
    try {   
        const actions = await db.get()
        if(actions) {
            res.status(200).json(actions);
        } else {
            res.status(404).json({ message: "there is an issue with the info you sent" })
        }
    }
    catch(error) {
        res.status(500).json({ message: "nott working!!!!"})
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {   
        const actions = await db.get(id)
        if(actions) {
            res.status(200).json(actions);
        } else {
            res.status(404).json({ message: "there is an issue with the info you sent" })
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
        const updatedAction = await db.update(id, updates)
        if(updatedAction) {
            res.status(202).json(updatedAction)
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
            res.status(202).json({ message: "action deleted"})
        } else {
            res.status(204)/json({ message: "we cant find that project "})
        }
    }
    catch(error) {
        res.status(500).json({ message: "nott working!!!!"})
    }
})

module.exports = router;