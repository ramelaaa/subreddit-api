const express   = require('express'); 
const subredditRoutes = require('./app/routes/subreddit');
const app = express(); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api/v1', subredditRoutes);

const port = process.env.PORT || 4000;
module.exports = app.listen(port);