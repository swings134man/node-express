const express = require('express');
const router = express.Router();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Custom
// app.get("/test", (req, res) =>{
//     res.send("Test Response Body");
// })

router.get('/', function(req, res, next) {
    res.send('Test Response');
});

router.get('/get', function (req, res, next) {
    res.send("GET METHODS");
});

module.exports = router;