const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');



router.get('/', (req, res) => {
    console.log('GET /api/admin');
    pool.query(`SELECT * FROM "feedback"`)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/feedBack', error)
        res.sendStatus(500);
    });
})

module.exports = router;