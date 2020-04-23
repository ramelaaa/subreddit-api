const express = require('express');
const subRetCtlr = require('../controller/subreddit')
const router = express.Router();

router.get('/getSubreddit/:subreddit', subRetCtlr.getSubreddit);

module.exports = router;