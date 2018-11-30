import express from 'express';
import config from '../config';
import serverRender from './dom';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log("Rendering...");
  const initialContent = serverRender();
  res.render('index',  { initialContent: initialContent });
})

app.listen(config.port, function listenHandler() {
  console.info('Running on ${config.port}');
});


