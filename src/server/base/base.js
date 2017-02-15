export default `
  <html>
    <head>
      <title>{{TITLE}}</title>
      <link href="/styles/bundle.css" rel="stylesheet" />
    </head>
    <body>
      <div id="root">{{SSR}}</div>
      <script src="/scripts/bundle.js"></script>
    </body>
  </html>
`;
