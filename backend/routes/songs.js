const express = require('express');
const { check } = require('express-validator');

const { Song } = require('../db/models');

const router = express.Router();

//get all songs
router.get('/', async (req, res) => {
    const Songs = await Song.findAll();
    res.json({ Songs });
})


module.exports = router;
