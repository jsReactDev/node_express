const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('GET route on test.');
});
router.post('/', function(req, res){
    res.send('POST route on test.');
});
router.delete('/', function(req, res){
    res.send('DELETE route on test.');
});
router.put('/', function(req, res){
    res.send('PUT route on test.');
});

//export this router to use in our index.js
module.exports = router;