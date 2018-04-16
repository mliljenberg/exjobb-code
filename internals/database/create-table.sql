DROP DATABASE IF EXISTS ebdb ;

CREATE DATABASE ebdb;

USE ebdb;

CREATE TABLE Main (
  Id int NOT NULL AUTO_INCREMENT,
  Site VARCHAR(100) NOT NULL,
  Language VARCHAR(100) NOT NULL,
  Gender int NOT NULL,
  Age int NOT NULL,
  PRIMARY KEY(Id)
);

CREATE TABLE QuestionText (
  Id int NOT NULL AUTO_INCREMENT,
  Question VARCHAR(1000) NOT NULL,
  Type VARCHAR(100) NOT NULL,
  FPattern INT,
  Site VARCHAR(100) NOT NULL,
  Language VARCHAR(100) NOT NULL,
  CorrectText VARCHAR(100),
  PRIMARY KEY(Id)
);

CREATE TABLE Sus (
  Id int NOT NULL AUTO_INCREMENT,
  MainId INT NOT NULL,
  Question1 INT NOT NULL,
  Question2 INT NOT NULL,
  Question3 INT NOT NULL,
  Question4 INT NOT NULL,
  Question5 INT NOT NULL,
  Question6 INT NOT NULL,
  Question7 INT NOT NULL,
  Question8 INT NOT NULL,
  Question9 INT NOT NULL,
  Question10 INT NOT NULL,
  Question11 INT NOT NULL,
  Sum Int NOT NULL,
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
  Time INT,
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

ALTER TABLE QuestionText CONVERT TO CHARACTER SET UTF8;
ALTER TABLE Actions CONVERT TO CHARACTER SET UTF8;
ALTER TABLE Questions CONVERT TO CHARACTER SET UTF8;
ALTER TABLE Main CONVERT TO CHARACTER SET UTF8;
ALTER TABLE Sus CONVERT TO CHARACTER SET UTF8;


-- Create queries for inputing all the questions into question text
INSERT INTO QuestionText (Question, Type, FPattern, Site, Language, correctText) VALUES
("In the menu bar select: Military", "MENU", "1", "qq", "en", "Military"),
("在菜单栏中选择：军事", "MENU", "1", "qq", "zh", "军事"),

("In the menu bar select: Furniture", "MENU", "0", "qq", "en", "Furniture"),
("在菜单栏中选择：家居", "MENU", "0", "qq", "zh", "家居"),

("In the menu bar select: Celebrity", "MENU", "1", "qq", "en", "Celebrity"),
("在菜单栏中选择：明星", "MENU", "1", "qq", "zh", "明星"),

("In the menu bar select: Culture", "MENU", "0", "qq", "en", "Culture"),
("在菜单栏中选择：文化", "MENU", "0", "qq", "zh", "文化"),

("Click on the following news: Dow plunge nearly 700 points on Friday what triggerd it?", "DIRECT", "1", "qq", "en", "Dow plunge nearly 700 points on Friday what triggerd it? "),
("点击以下新闻: 道指周五暴跌近700点 为什么没有触发熔断机制？", "DIRECT", "1", "qq", "zh", "道指周五暴跌近700点 为什么没有触发熔断机制？"),

("Click on the following news segment: True beauty don’t fear wrinkles", "DIRECT", "0", "qq", "en", "True beauty don’t fear wrinkles"),
("点击以下新闻: 真美人无惧皱纹", "DIRECT", "0", "qq", "zh", "真美人无惧皱纹"),

("Click on the following news segment: One hundred Hongkong staff more than half hiding in the United States and Canada", "DIRECT", "1", "qq", "en", "One hundred Hongkong staff more than half hiding in the United States and Canada"),
("点击以下新闻: 百名红通人员归案过半 藏匿在美国加拿大者最多", "DIRECT", "1", "qq", "zh", "百名红通人员归案过半 藏匿在美国加拿大者最多"),

("Click on the following news segment: 7-year-old boy earns hundreds of thousands determins to financialy support parents", "DIRECT", "0", "qq", "en", "7-year-old boy earns hundreds of thousands determins to financialy support parents"),
("点击以下新闻: 7岁男孩挣下十几万存款 6岁男孩立志做爸妈的腿", "DIRECT", "0", "qq", "zh", "7岁男孩挣下十几万存款 6岁男孩立志做爸妈的腿"),

("Follow the page on Twitter", "FUNCTIONAL", "0", "qq", "en", "Twitter"),
("按照Twitter上的页面", "FUNCTIONAL", "0", "qq", "zh", "Twitter"),

("Select the news about Engineers testing fruit", "INDIRECT", "0", "qq", "en", "Engineers return to the field and test fruit"),
("选择有关工程师测试水果的新闻", "INDIRECT", "0", "qq", "zh", "工程师返乡种水果又考博"),

("Select the news article with a picture in the Real Estate category", "INDIRECT", "1", "qq", "en", "Sell now or continue to wait and see, how will the future property market go?"),
("选择包含房地产类别图片的新闻报道", "INDIRECT", "0", "qq", "zh", "返乡置业还是继续观望，未来楼市怎么走？"),

("Select the picture with a burning airplane", "INDIRECT", "1", "qq", "en", "Russian fighter pilots last words before blowing himself up with a grenade ""For my brothers"""),
("用燃烧的飞机选择照片", "INDIRECT", "0", "qq", "zh", "俄战机飞行员最后时刻疑曝光：高喊“为了兄弟”"),

("Select the news about gold coins found in a shipwreck", "INDIRECT", "0", "qq", "en", "Treasure|   Thousands of gold coins found in a century-old shipwreck"),
("选择关于沉船中发现的金币的新闻", "INDIRECT", "0", "qq", "zh", "藏宝图|   百年沉船中发现价值3.2亿黄金"),

("In the menu Click on: Phones", "MENU", "1", "bbc", "en", "Phones"),
("在导航菜单中选择: 电话", "MENU", "1", "bbc", "zh", "电话"),

("In the menu Click on: Music", "MENU", "1", "bbc", "en", "Music"),
("在导航菜单中选择：音乐", "MENU", "1", "bbc", "zh", "音乐"),

("In the menu Click on: USA Politics", "MENU", "1", "bbc", "en", "Politics"),
("在导航菜单中选择：美国政治", "MENU", "1", "bbc", "zh", "政治"),

("In the menu Click on: Africa", "MENU", "1", "bbc", "en", "Africa"),
("在导航菜单中选择：非洲", "MENU", "1", "bbc", "zh", "非洲"),

("Click on the following news segment: Breastfeeding mother sells milk on street", "DIRECT", "1", "bbc", "en", "Breastfeeding mother sells milk on street"),
("点击以下新闻: 母乳喂养的母亲在街上卖牛奶", "DIRECT", "1", "bbc", "zh", "母乳喂养的母亲在街上卖牛奶"),

("Click on the following news segment: Samsung heir freed from S Korea jail", "DIRECT", "0", "bbc", "en", "Samsung heir freed from S Korea jail"),
("点击以下新闻: 三星继承人从南韩监狱中解脱出来", "DIRECT", "0", "bbc", "zh", "三星继承人从南韩监狱中解脱出来"),

("Click on the following news segment: From a broken neck to a Rhodes Scholarship at Oxford", "DIRECT", "1", "bbc", "en", "From a broken neck to a Rhodes Scholarship at Oxford"),
("点击以下新闻: 从断脖子到牛津的罗兹奖学金", "DIRECT", "1", "bbc", "zh", "从断脖子到牛津的罗兹奖学金"),

("Click on the following news segment: How Ikea has changed the way we shop", "DIRECT", "0", "bbc", "en", "How Ikea has changed the way we shop"),
("点击以下新闻: 宜家如何改变了我们的购物方式", "DIRECT", "0", "bbc", "zh", "宜家如何改变了我们的购物方式"),

("Click on the news about a challenge to become vegan", "INDIRECT", "1", "bbc", "en", "Make Me a Vegan: The challenge"),
("点击关于挑战的消息，成为素食主义者", "INDIRECT", "1", "bbc", "zh", "让我成为纯素食者：挑战"),

("Click on the news that has to do with Indonesia", "INDIRECT", "0", "bbc", "en", "Bandung aims to be Indonesia's tech hub"),
("点击与印尼有关的新闻", "INDIRECT", "0", "bbc", "zh", "万隆的目标是成为印尼的高科技中心"),

("Click on the news article about the president refusing to step down", "INDIRECT", "1", "bbc", "en", "Zuma rejects ANC request to step down"),
("点击关于总统拒绝下台的新闻文章", "INDIRECT", "1", "bbc", "zh", "祖马拒绝ANC要求下台"),

("Click on the news about the killed NFL player", "INDIRECT", "0", "bbc", "en", "NFL player killed by a suspected drunk driver"),
("点击关于NFL球员的消息", "INDIRECT", "0", "bbc", "zh", "NFL球员被一名怀疑醉酒的司机杀死"),

("Follow the page on Twitter", "FUNCTIONAL", "1", "bbc", "en", "Twitter"),
("按照Twitter上的页面", "FUNCTIONAL", "1", "bbc", "zh", "Twitter");


-- Get whether to use bbc or qq.....

-- Query to insert all the data into the tables
INSERT INTO Main (Site, Language) VALUES("site here", "language here"); SELECT LAST_INSERT_ID();

INSERT INTO Sus (MainId, Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11) VALUES();

INSERT INTO Questions (MainId, QuestionId, Correct, StartTime, EndTime) VALUES("main id here", "Question id here", "Correct INT", "StartTime TIME", "EndTime TIME");SELECT LAST_INSERT_ID();

INSERT INTO Actions (QuestionsId, PosX, PosY, ScreenWidth, ScreenHeight, RelativeX, RelativeY, RelativeTime) VALUES ("QuestionsId int","PosX int","PosY int","ScreenWidth int","ScreenHeight int","RelativeX int","RelativeY int","RelativeTime TIME");

INSERT INTO Sus (MainId, Question1, Question2... ) VALUES("MainId", "Question1", "Question2...");

-- Delete all databases
DROP TABLE Actions; DROP TABLE Questions; DROP TABLE QuestionText; DROP TABLE Sus; DROP TABLE Main;
