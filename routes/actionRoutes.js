const express = require('express');
const db = require('../data/helpers/actionModel')
const router = express();

router.get('/actions', async (req, res) => {
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

router.get('/:projectId/actions', async (req, res) => {
    const projectId = req.params.projectId
    try {   
        const actions = await db.get(projectId)
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

module.exports = router;