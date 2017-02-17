export default `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width" name="viewport">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <link rel="icon" href="http://evanjones.xyz/evansapps.ico?v=1.0.0">
      <title>Evan Jones</title>
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
