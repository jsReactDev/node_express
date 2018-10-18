const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('GET route on test2.');
});
router.post('/', function(req, res){
    res.send('POST route on test2.');
});
router.delete('/', function(req, res){
    res.send('DELETE route on test2.');
});
router.put('/', function(req, res){
    res.send('PUT route on test2.');
});

//export this router to use in our index.js
module.exports = router;