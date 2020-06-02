import * as express from 'express';

import apiRouter from './routers/v1';

const app = express();

app.use(function (req, _, next) {
  console.log(`[${req.method}] ${req.path}`);
  next();
});

app.use('/v1', apiRouter);

export default app;
