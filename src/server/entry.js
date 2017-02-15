import Http from 'http';
import Path from 'path';
import Express from 'express';
import Emoji from 'node-emoji';
import Router from './router';
import ContentfulData from './data/contentful'

const app = Express();
app.server = Http.createServer(app);

app.use('/scripts', Express.static( Path.join(__dirname, '/client', 'scripts')))
app.use('/styles', Express.static( Path.join(__dirname, '/client', 'styles')))

app.all('*', (req, res, next) => {
  const earth = Emoji.emoji.earth_americas;
  console.log(`${earth}  ${req.originalUrl}`)
  next()
})

Router(app);

app.server.listen(process.env.PORT || 8080, () => {
  if (!process.env.PORT) {
    const earth = Emoji.emoji.earth_americas;
    const port = app.server.address().port;
    console.log(`Listening on ${earth}  http://localhost:${port}`);
  }
});
