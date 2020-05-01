const express   = require('express'); 
const app = express(); 

const subredditRoutes = require('./app/routes/subreddit');
const HttpError = require('./app/models/http-error');

// const cors = require('cors')

// app.use(cors())

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "localhost:3000");
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     if ('OPTIONS' == req.method) {
//       res.sendStatus(200);
//     }
//     else {
//       next();
//     }
//   });

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
    return res.send(200);
  } else {
    return next();
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
