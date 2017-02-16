import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import Template from './base/base';
import Application from '../shared/containers/initial';
import { routes } from '../shared/routes/routes';
import configureStore from '../shared/store/store';
import ContentfulData from './data/contentful';

const getTemplate = (html, state) => {
  return Template.replace('{{HTML}}', html)
    .replace('{{STATE}}', JSON.stringify(state).replace(/</g, '\\x3c'));
};

const getMarkup = (req, res, store) => {
  return new Promise((resolve, reject) => {
    match({ routes, location: req.url }, (err, redirect, props) => {
      if (err) {
        reject();
      } else if (redirect) {
        res.redirect(302, redirect.pathname + redirect.search);
      } else if (props) {
        resolve(
          renderToString(
            <Provider store={store}>
              <RouterContext {...props} />
            </Provider>
          )
        );
      } else {
        reject();
      }
    });
  });
};

const errorHandler = (req, res, err) => {
  console.log(err);
  res.send('Error');
};

export default (app, data) => {
  app.get('*', async (req, res) => {
    try {
      const data = await ContentfulData();
      const store = configureStore(data);
      const html = await getMarkup(req, res, store);
      const finalState = store.getState();
      res.send(getTemplate(html, finalState));
    } catch (err) {
      errorHandler(req, res, err);
    }
  });
};
