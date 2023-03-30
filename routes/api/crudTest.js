const express = require('express');
const Path = require("path");
const router = express.Router();

const testData = {
    "userId" : "testUser1",
    "password" : "1234",
    "userName" : "kang dev"
}


// GET
router.get('/get', function (req, res, next){
    res.json(testData);
});

// GET - With Param
router.get('/get/:userId', function (req, res, next){
    // param - /crud/get/{userId}
    // const { userId } = req.params;
    const params = req.params;
    console.log(params.userId); //test
    console.log(params); //{ userId: 'test' }
    res.json({'userId' : params.userId});
    // res.send("userId = " + params.userId); // userId = test

    // query - /crud/get/asd?userId=testUser&pw=1234
    // const query = req.query; // userId, pw
    // console.log(query);
    // res.send("userId = " + query.userId + " pw = " + query.pw);
});

// POST
router.post('/post', function (req, res, next){

    const body = req.body;
    console.log(body);

    res.json(body);
});


// HTML FILE = crudTest.html
router.get('/', (req,res) => {
    // const fp = Path.join(__dirname, 'views/crud', 'crudTest.html');
    console.log(__dirname);
    res.sendFile('/Users/seokjunkang/node/node-express/views/crud/crudTest.html');
});



module.exports = router;