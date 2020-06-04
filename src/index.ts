import db from './db';
import app from './app';

const port = 3000;

db.sync() // create tables if they don't exist already
  .then(() => {
    app.listen(port, () => {
      console.log("listening");
    });
  })
  .catch((err: Error) => {
    console.error(err);
  });

