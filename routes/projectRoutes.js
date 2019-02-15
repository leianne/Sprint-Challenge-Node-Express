const express = require('express');
const db = require('../data/helpers/projectModel');
const router = express();

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

module.exports = router;