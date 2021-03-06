const express   = require('express'); 
const app = express(); 

const subredditRoutes = require('./app/routes/subreddit');
const HttpError = require('./app/models/http-error');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "localhost:3000");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
  });

app.use('/api/v1', subredditRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  next(error);
});

app.use((error,req,res,next) => {
  if(res.headerSent){
      return next(error);
  }
  res.status(error.code || 500);
  res.json({message: error.message || 'A unknown error occurred!'});
});

const port = process.env.PORT || 4000;
module.exports = app.listen(port);


// const cors = require('cors');
// app.use(cors(corsOptions));

// var corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204

