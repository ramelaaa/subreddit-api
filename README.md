# SubReddit Api
This app allows to retrieve the top articles from a given subreddit


## Run locally

### Create an app on reddit web page and get information for .env file

```
https://www.reddit.com/dev/api/
```

### Add a .env file and add below information

```
CLIENT_ID=
CLIENT_SECRET=
REDDIT_USER=
REDDIT_PASS=
```

### Install
```
npm install
```

### Run

```
npm start
```

Rest End point: `http://localhost:4000/api/v1/subreddits/:subreddit`

Sample request: `http://localhost:4000/api/v1/subreddits/News`

Sample response: 

```
[
    {
        "id": "dfn3yi",
        "url": "https://www.thedailybeast.com/blizzard-employees-staged-a-walkout-to-protest-banned-pro-hong-kong-gamer",
        "title": "Blizzard Employees Staged a Walkout After the Company Banned a Gamer for Pro-Hong Kong Views",
        "author": "t2_167ibb"
    },
    {
        "id": "eubjfc",
        "url": "https://www.fox5dc.com/news/kobe-bryant-killed-in-helicopter-crash-in-california-tmz-reports",
        "title": "Kobe Bryant killed in helicopter crash in California",
        "author": "t2_6eq99"
    },
]
```

### Run Tests

```
npm test
```

## About

This app uses Node JS with Snoowrap library 

### Production Link on Heroku

```
https://subreddit-api-dg.herokuapp.com/api/v1/subreddits/:subreddit
```
```
Sample request : https://subreddit-api-dg.herokuapp.com/api/v1/subreddits/News
```

## Credit
Original Owner: [dgundogan](https://github.com/dgundogan)
<br>
License: [MIT](https://github.com/dgundogan/subreddit-api/blob/master/LICENSE)
<br>
Edits have been made in app/contoller/subreddit.js