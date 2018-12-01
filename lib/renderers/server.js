import express from 'express';
import config from '../config';
import serverRender from './dom';
import { data } from '../../test-data';
const app = express();



app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const initialContent = serverRender();
  res.render('index',  { initialContent: initialContent });
})

app.get('/data', (req, res) => {
  console.log(data);
  res.send(data);
})

app.listen(config.port, function listenHandler() {
  console.info('Running on ${config.port}');
});


