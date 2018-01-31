require('dotenv').load();
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const { slackEvents } = require('./endpoints/slackevents')
const { helloResource } = require('./endpoints/helloResource')

const db = require('./db/client')

const port = process.env.PORT || 3000;
const app = express();

// You must use a body parser for JSON before mounting the adapter
app.use(bodyParser.json());

// Mount the event handler on a route
// NOTE: you must mount to a path that matches the Request URL that was configured earlier
app.use('/slack/events', slackEvents.expressMiddleware());
app.use('/hello', helloResource)

db.connect()

// Start the express application
http.createServer(app).listen(port, () => {
  console.log(`server listening on port ${port}`);
});
