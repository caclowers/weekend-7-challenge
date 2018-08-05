const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    console.log('feedback router', req.body);
    
    console.log('GET /api/feedback');
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                VALUES ($1, $2, $3, $4);`, [req.body.feelings, req.body.understanding, req.body.support, req.body.comments])
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/feedBack', error)
        res.sendStatus(500);
    });
});

module.exports = router;