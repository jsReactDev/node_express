const express  = require('express');
const app = express();

const testRouter = require('./routers/test');
const testRouter2 = require('./routers/test2');

app.use('/test', testRouter);
app.use('/test2', testRouter2);

app.listen(3000);