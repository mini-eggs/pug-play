import Path from 'path';
import Fs from 'fs';
import Template from './base/base'
import ContentfulData from './data/contentful'

const getTemplate = data => {
  let template = Template
  template = template.replace('{{TITLE}}', 'Woah!')
  template = template.replace('{{SSR}}', JSON.stringify(data))
  return template
}

const errorHandler = (err, req, res) => {
  console.log(err)
  res.send('Error')
}

export default (app, data) => {
  app.get('/', async (req, res) => {
    try {
      res.send(getTemplate( await ContentfulData() ));
    }
    catch(err) {
      errorHandler(err, req, res)
    }
  });
};
