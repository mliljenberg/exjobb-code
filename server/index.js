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
// app.use('/api', myApi);
/*
app.use('/test', (req, res) => {
  // console.info('request: ', req);
  // console.info('res: ', res);
  const sql = 'INSERT INTO test (firstname, lastname) VALUES ("Testar", "testsson")';

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.info('1 record inserted', result);
  });
  res.send({ text: 'yey fungerar!' });

});
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/main', (req, res) => {
  console.info('request: ', req.body);
  const sqlInitiate = 'SELECT Site FROM Main WHERE Id = (SELECT max(Id) FROM Main WHERE Language = ?)';
  con.query(sqlInitiate, req.body.language, (err, result) => {
    if (err) throw err;
    console.log(result);
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
      console.info('Funkar main id: ', result2.insertId);
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
        console.log(questions);
        res.send({ site: newSite, questions, mainId });
      });
    });
  });
});

  // Get the automatic id

app.use('*/question', (req, res) => {
  const question = req.body.question;
  const questionSql = 'INSERT INTO Questions (MainId, QuestionId, Correct, StartTime, EndTime) VALUES(?,?,?,?,?)';
  con.query(questionSql, [question.mainId, question.id, question.correct, question.startTime, question.endTime], (err1, result1) => {
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

/**
app.use('/qq/site', (req, res) => {
  // console.info('request: ', req);
  // console.info('res: ', res);
  let questionId = -1;
  con.query('SELECT LAST_INSERT_ID() FROM Questions', (err2, result2) => {
    if (err2) throw err2;
    console.info('Funkar questionId: ', result2[0][Object.keys(result2[0])[0]]);
    questionId = result2[0][Object.keys(result2[0])[0]];


    const questionSql = 'INSERT INTO Questions (MainId, QuestionId, Correct, StartTime, EndTime) VALUES(?,?,?,?,?)';
    con.beginTransaction((err) => {
      if (err) { throw err; }

    // map here
      req.body.questions.forEach((question, index) => {
        const questionIndex = index;
        questionId += 1;
        con.query(questionSql, [mainId, question.id, question.correct, question.startTime, question.endTime], (err3, result2) => {
          if (err3) {
            con.rollback(() => {
              throw err3;
            });
          }
          const actionSql = 'INSERT INTO Actions (QuestionsId, PosX, PosY, ScreenWidth, ScreenHeight, RelativeX, RelativeY, RelativeTime) VALUES (?,?,?,?,?,?,?,?)';
          question.actions.forEach((action, actionIndex) => {
            con.query(actionSql, [questionId, action.posX, action.posY, action.screenWidth, action.screenHeight, action.relativeX, action.relativeY, action.relativeTime], (err4, result3) => {
              if (err4) {
                con.rollback(() => {
                  throw err4;
                });
              }
              if (questionIndex === req.body.questions.length - 1 && actionIndex === question.actions.length - 1) {
              // TODO: Kommer nog inte funka då det är I/O functioner
                console.info('we are going to commit here!', questionIndex);
                con.commit((err4) => {
                  if (err4) {
                    con.rollback(() => {
                      throw err;
                    });
                  }
                  console.log('success!');
                });
              }
            });
          });
        });
      });
    });
  });
  res.send({ text: 'yey fungerar!' });
});
 */
app.use('*/finish', (req, res) => {
  const sql = 'INSERT INTO Sus (MainId, Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)';
  const answers = [];
  Object.values(req.body).forEach((value) => answers.push(value));
  con.query(sql, answers, (err, result) => {
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
  database: 'test',
});

con.connect((err) => {
  if (err) throw err;
});

