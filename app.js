const express = require('express');
const app = express();
const db = require('./db');
let dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT || 9200;
const cors = require('cors');
app.use(cors());

const AuthController = require('./controller/authController');

app.get("/", (req, res) => {
    res.send("Express server is running");
});

app.use('/api/auth',AuthController);

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})