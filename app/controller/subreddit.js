const Snoowrap = require('snoowrap');
if (process.env.NODE_ENV === 'development') {
	require('dotenv').config();
  }

const client = new Snoowrap({
	userAgent: 'subreddit-api',
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	refreshToken: process.env.REFRESH_TOKEN
});

exports.getSubreddits = (req, res, next) => {
	var subreddit = req.params.subreddit;
	client.getSubreddit(subreddit)
		  .getTop({time: 'week'})
		  .map(post => {
				return {
					id: post.id,
					url: post.url,
					title: post.title,
					// public_description: post.public_description,
					// subscribers: post.subscribers,
					author: post.author_fullname,
					score: post.score
				};
		}).then(topPostUrlAndTitle => res.json(topPostUrlAndTitle)
		 ).catch(err => {throw new Error(err); });
};