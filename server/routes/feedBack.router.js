const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');



router.post('/', (req, res) => {
    console.log('GET /api/admin');
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "date"
                VALUES $1, $2, $3, $4;`, [])
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/feedBack', error)
        res.sendStatus(500);
    });
})

module.exports = router;