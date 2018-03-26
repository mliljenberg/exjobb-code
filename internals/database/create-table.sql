CREATE TABLE Main (
  Id int NOT NULL AUTO_INCREMENT,
  Site VARCHAR(100) NOT NULL,
  Language VARCHAR(100) NOT NULL,
  PRIMARY KEY(Id)
);

CREATE TABLE QuestionText (
  Id int NOT NULL AUTO_INCREMENT,
  Question VARCHAR(100) NOT NULL,
  Type VARCHAR(100) NOT NULL,
  RelativeX VARCHAR(100),
  RelativeY VARCHAR(100),
  Site VARCHAR(100) NOT NULL,
  PRIMARY KEY(Id)
);

CREATE TABLE Sus (
  Id int NOT NULL AUTO_INCREMENT,
  MainId INT NOT NULL,
  Question1 VARCHAR(100) NOT NULL,
  Question2 VARCHAR(100) NOT NULL,
  Question3 VARCHAR(100) NOT NULL,
  Question4 VARCHAR(100) NOT NULL,
  Question5 VARCHAR(100) NOT NULL,
  Question6 VARCHAR(100) NOT NULL,
  Question7 VARCHAR(100) NOT NULL,
  Question8 VARCHAR(100) NOT NULL,
  Question9 VARCHAR(100) NOT NULL,
  Question10 VARCHAR(100) NOT NULL,
  PRIMARY KEY (Id),
  FOREIGN KEY(MainId) REFERENCES Main(Id)
);

CREATE TABLE Questions (
  Id int NOT NULL AUTO_INCREMENT,
  MainId INT NOT NULL,
  QuestionId INT NOT NULL,
  Correct INT,
  StartTime TIME,
  EndTime TIME,
  PRIMARY KEY (Id),
  FOREIGN KEY(MainId) REFERENCES Main(Id),
  FOREIGN KEY(QuestionId) REFERENCES QuestionText(Id)
);

CREATE TABLE Actions (
  Id int NOT NULL AUTO_INCREMENT,
  QuestionsId int NOT NULL,
  PosX int,
  PosY int,
  ScreenWidth int,
  ScreenHeight int,
  RelativeX int,
  RelativeY int,
  RelativeTime TIME,
  PRIMARY KEY (Id),
  FOREIGN KEY(QuestionsId) REFERENCES Questions(Id)
);

-- Delete all databases
DROP TABLE Actions; DROP TABLE Questions; DROP TABLE QuestionText; DROP TABLE Sus; DROP TABLE Main;

-- Create queries for inputing all the questions into question text
INSERT INTO QuestionText (Question, Type, RelativeX, RelativeY, Site) VALUES("Question here", "DIRECT/INDIRECT/FUNCTIONAL/MENU", "RelativeX","RelativeY" "QQ/BBC"),
("Question here", "DIRECT/INDIRECT/FUNCTIONAL/MENU", "RelativeX","RelativeY" "QQ/BBC"),
("Question here", "DIRECT/INDIRECT/FUNCTIONAL/MENU", "RelativeX","RelativeY" "QQ/BBC"),

-- Get whether to use bbc or qq.....

-- Query to insert all the data into the tables
INSERT INTO Main (Site, Language) VALUES("site here", "language here"); SELECT LAST_INSERT_ID();

INSERT INTO Questions (MainId, QuestionId, Correct, StartTime, EndTime) VALUES("main id here", "Question id here", "Correct INT", "StartTime TIME", "EndTime TIME");SELECT LAST_INSERT_ID();

INSERT INTO Actions (QuestionsId, PosX, PosY, ScreenWidth, ScreenHeight, RelativeX, RelativeY, RelativeTime) VALUES ("QuestionsId int","PosX int","PosY int","ScreenWidth int","ScreenHeight int","RelativeX int","RelativeY int","RelativeTime TIME");

INSERT INTO Sus (MainId, Question1, Question2... ) VALUES("MainId", "Question1", "Question2...");
