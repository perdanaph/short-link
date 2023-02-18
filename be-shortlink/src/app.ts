import express from 'express';
import config from 'config';
import routes from './routes';
import bodyParser from 'body-parser';
import dbConnect from './utils/db.connect';

const app = express();
const port = config.get('PORT');

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  routes(app);
  dbConnect();
});
