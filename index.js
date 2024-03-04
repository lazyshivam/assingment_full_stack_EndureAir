const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use('/user', require('./routes/route'));

app.use(cors());
// app.use(express.json())
app.use('*', function (req,res) {
    res.send("Server is runnig");
})
const PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log("listenin at port ", PORT);
});