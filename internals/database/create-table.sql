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
  Position VARCHAR(100),
  Site VARCHAR(100) NOT NULL,
  PRIMARY KEY(Id)
);

CREATE TABLE Sus (
  Id int NOT NULL AUTO_INCREMENT,
  SusId INT NOT NULL,
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
  FOREIGN KEY(SusId) REFERENCES Main(Id)
);

CREATE TABLE Questions (
  Id int NOT NULL AUTO_INCREMENT,
  MainId INT NOT NULL,
  QuestionId INT NOT NULL,
  Correct INT,
  StartTime TIME,
  EndTime TIME,
  TotalTime Time,
  PositionMABY VARCHAR(100),
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

-- Create queries for inputing all the questions into question text

