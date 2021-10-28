const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    console.log(req.params);
    console.log('/put hit', req.params);
    // const queryString = `UPDATE images SET likes= WHERE id=${req.params.id};`

    // pool.query(queryString).then((results)=>{
    //     res.sendStatus(200);
    // }).catch((err)=>{
    //     console.log('error updating task in database:', err);
    //     res.sendStatus(500);
    // })
    
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let queryString =  `SELECT * FROM images ORDER BY id`; // 'messages' is table name
    pool.query(queryString).then( ( results )=>{
        //if query is successful
        res.send( results.rows);
    }).catch( (err)=>{
        // if there was an error
        console.log(err);
        res.sendStatus( 500 );
    })
    // res.send(galleryItems);
}); // END GET Route

module.exports = router;