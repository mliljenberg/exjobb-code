/* eslint consistent-return:0 */

const express = require('express');
const bodyParser = require('body-parser');

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('*/main', (req, res) => {
  console.log('/main reached');
  const sqlInitiate = 'SELECT Site FROM Main WHERE Id = (SELECT max(Id) FROM Main WHERE Language = ?)';
  con.query(sqlInitiate, req.body.language, (err, result) => {
    if (err) throw err;
    let lastSite = 'qq';
    if (result.length > 0) {
      lastSite = result[0].Site;
    }

    let newSite = '';
    if (lastSite === 'qq') {
      newSite = 'bbc';
    } else {
      newSite = 'qq';
    }
    const questions = [];
    const sql = 'INSERT INTO Main (Site, Language) VALUES(?, ?)';
    con.query(sql, [newSite, req.body.language], (err2, result2) => {
      if (err) throw err;
      const mainId = result2.insertId;
      const sql2 = 'Select * FROM QuestionText WHERE Site=? AND Language=?';
      con.query(sql2, [newSite, req.body.language], (err3, result3) => {
        if (err) throw err;
        result3.forEach((item) => {
          questions.push({ id: item.Id,
            question: item.Question,
            actions: [],
            correct: 0,
            endTime: 0,
            correctText: item.CorrectText,
            startTime: -1,
            totalTime: -1,
            mainId,
          });
        });
        res.send({ site: newSite, questions, mainId });
      });
    });
  });
});

  // Get the automatic id

app.use('*/question', (req, res) => {
  console.log('/question reached');
  const question = req.body.question;
  const questionSql = 'INSERT INTO Questions (MainId, QuestionId, Correct, StartTime, EndTime, Time) VALUES(?,?,?,?,?,?)';
  con.query(questionSql, [question.mainId, question.id, question.correct, question.startTime, question.endTime, question.totalTime], (err1, result1) => {
    if (err1) {
      con.rollback(() => {
        throw err1;
      });
    }

    const questionId = result1.insertId;


    const actionSql = 'INSERT INTO Actions (QuestionsId, PosX, PosY, ScreenWidth, ScreenHeight, RelativeX, RelativeY, RelativeTime) VALUES (?,?,?,?,?,?,?,?)';
    question.actions.forEach((action) => {
      con.query(actionSql, [questionId, action.posX, action.posY, action.screenWidth, action.screenHeight, action.relativePosX, action.relativePosY, action.relativeTime], (err4, result3) => {
        if (err4) {
          con.rollback(() => {
            throw err4;
          });
        }
      });
    });
  });
  res.send({ message: 'success' });
});
app.use('*/finish', (req, res) => {
  console.log('/finish reached');
  const sql = 'INSERT INTO Sus (MainId, Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11, Sum) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)';
  const answers = [];
  let sum = 0;
  Object.values(req.body).forEach((value, index) => {
    answers.push(value);
    if (index >= 1) {
      sum += Number(value);
    }
  });
  answers.push(sum);
  con.query(sql, answers, (err, result) => {
    if (err) throw err;
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
  host: 'aa1fk59xwsw9wmv.cg05xtnsvhwq.ap-northeast-2.rds.amazonaws.com',
  user: 'Marcus',
  password: 'marcusl36',
  database: 'ebdb',
});

/*
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});
*/

con.connect((err) => {
  if (err) { console.log('sql connect err'); throw err; }
  console.log('connection to database succsesfull');
});

