const express = require('express')
const cors = require('cors')
const connection = require('./database/connection')
const routes = require('./routes/router')
const mongoose = require('mongoose')

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

connection()

app.use('/api', routes)
mongoose.connection.once('open', () => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
});
