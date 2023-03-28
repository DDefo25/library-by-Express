const express = require('express');
const config = require('./config');
const apiRouter = require('./routes/api');
const error404 = require('./middleware/er404');

const app = express();

app.use(express.json());

app.use(apiRouter);

app.use(error404);

app.listen(config.PORT);
