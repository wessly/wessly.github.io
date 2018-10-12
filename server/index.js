import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));

app.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);
  const helmet = Helmet.renderStatic();

  res.send(formatHTML(app, helmet));
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});

function formatHTML(appStr, helmet) {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
        </head>
        <body>
          <div id="root">
            ${ appStr }
          </div>
          <script src="./bundle.js"></script>
        </body>
      </html>
    `
  }
