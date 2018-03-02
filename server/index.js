/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
const mysql = require('mysql');

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
app.use('/test', (req, res) => {
  // console.info('request: ', req);ß
  // console.info('res: ', res);
  const sql = 'INSERT INTO test (firstname, lastname) VALUES ("Testar", "testsson")';
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.info('1 record inserted', result);
  });
  res.send({ text: 'yey fungerar!' });
});

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testing',
});

con.connect((err) => {
  if (err) throw err;
});

