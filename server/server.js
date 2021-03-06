const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
//GET ROUTE
const informationRouter = require('./routes/information.router');
app.use('/api/information', informationRouter)

//POST ROUTE
const submitRouter = require('./routes/submit.router');
app.use('/api/information', submitRouter);

//DELETE ROUTE
const deleteRouter = require('./routes/delete.router');
app.use('/api/information', deleteRouter);


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});