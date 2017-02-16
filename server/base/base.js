export default `
  <!doctype html>
  <html>
    <head>
      <title>Woah!</title>
      <link href="/styles/bundle.css" rel="stylesheet" />
    </head>
    <body>
      <div id="root">{{HTML}}</div>
      <script>
        window.__PRELOADED_STATE__ = {{STATE}}
      </script>
      <script src="/scripts/bundle.js"></script>
    </body>
  </html>
`;
