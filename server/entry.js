import Http from 'http';
import Path from 'path';
import Express from 'express';
import Router from './router';
import ContentfulData from './data/contentful';

if(process.env.PORT) {
  process.env.NODE_ENV = 'production'
}

const app = Express();
app.server = Http.createServer(app);

app.use('/scripts', Express.static(Path.join(__dirname, '/client', 'scripts')));
app.use('/styles', Express.static(Path.join(__dirname, '/client', 'styles')));

Router(app);

app.server.listen(process.env.PORT || 8080, error => {
  const port = app.server.address().port;

  console.log( process.env )

  if (error) {
    console.error(error);
  } else {
    console.info(
      `==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`
    );
  }
});
