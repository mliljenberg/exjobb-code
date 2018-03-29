CREATE TABLE Main (
  Id int NOT NULL AUTO_INCREMENT,
  Site VARCHAR(100) NOT NULL,
  Language VARCHAR(100) NOT NULL,
  PRIMARY KEY(Id)
);

CREATE TABLE QuestionText (
  Id int NOT NULL AUTO_INCREMENT,
  Question VARCHAR(1000) NOT NULL,
  Type VARCHAR(100) NOT NULL,
  FPattern INT,
  Site VARCHAR(100) NOT NULL,
  Language VARCHAR(100) NOT NULL,
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
INSERT INTO QuestionText (Question, Type, FPattern, Site, Language) VALUES
("In the menu bar select: Military", "MENU", "1", "qq", "en"),
("在菜单栏中选择：军事", "MENU", "1", "qq", "zh"),

("In the menu bar select: Furniture", "MENU", "0", "qq", "en"),
("在菜单栏中选择：家居", "MENU", "0", "qq", "zh"),

("In the menu bar select: Celebrity", "MENU", "1", "qq", "en"),
("在菜单栏中选择：明星", "MENU", "1", "qq", "zh"),

("In the menu bar select: Culture", "MENU", "0", "qq", "en"),
("在菜单栏中选择：文化", "MENU", "0", "qq", "zh"),

("Click on the following news: Dow plunge nearly 700 points on Friday what triggerd it?", "DIRECT", "1", "qq", "en"),
("点击以下新闻: 道指周五暴跌近700点 为什么没有触发熔断机制？", "DIRECT", "1", "qq", "zh"),

("Click on the following news segment: True beauty don’t fear wrinkles", "DIRECT", "0" "qq", "en"),
("点击以下新闻: 真美人无惧皱纹", "DIRECT", "0", "qq", "zh"),

("Click on the following news segment: One hundred Hongtong staff more than half hiding in the United States and Canada", "DIRECT", "1", "qq", "en"),
("点击以下新闻: 百名红通人员归案过半 藏匿在美国加拿大者最多", "DIRECT", "1", "qq", "zh"),

("Click on the following news segment: 7-year-old boy earns hundreds of thousands determins to financialy support parents", "DIRECT", "0", "qq", "en"),
("点击以下新闻: 7岁男孩挣下十几万存款 6岁男孩立志做爸妈的腿", "DIRECT", "0", "qq", "zh"),

("Follow the page on Twitter", "FUNCTIONAL", "0", "qq", "en"),
("按照Twitter上的页面", "FUNCTIONAL", "0", "qq", "zh"),

("Select the news about Engineers testing fruit", "INDIRECT", "0", "qq", "en"),
("选择有关工程师测试水果的新闻", "INDIRECT", "0", "qq", "zh"),

("Select the news article with a picture in the Real Estate category", "INDIRECT", "1", "qq", "en"),
("选择包含房地产类别图片的新闻报道", "INDIRECT", "0", "qq", "zh"),

("Select the picture with a burning airplane", "INDIRECT", "1", "qq", "en"),
("用燃烧的飞机选择照片", "INDIRECT", "0", "qq", "zh"),

("Select the news about gold coins found in a shipwreck", "INDIRECT", "0", "qq", "en"),
("选择关于沉船中发现的金币的新闻", "INDIRECT", "0", "qq", "zh"),


("In the menu Click on: Phones", "MENU", "1", "bbc", "en"),
("在菜单中选择：电话", "MENU", "1", "bbc", "zh"),

("In the menu Click on: Music", "MENU", "1", "bbc", "en"),
("在菜单中选择：音乐", "MENU", "1", "bbc", "zh"),

("In the menu Click on: US Politics", "MENU", "1", "bbc", "en"),
("在菜单中选择：美国政治", "MENU", "1", "bbc", "zh"),

("In the menu Click on: News about Africa", "MENU", "1", "bbc", "en"),
("在菜单中选择：关于非洲的新闻", "MENU", "1", "bbc", "zh"),

("Click on the following news segment: Breastfeeding mother sells milk on street", "DIRECT", "1", "bbc", "en"),
("点击以下新闻: 母乳喂养的母亲在街上卖牛奶", "DIRECT", "1", "bbc", "zh"),

("Click on the following news segment: Samsung heir freed from S Korea jail", "DIRECT", "0", "bbc", "en"),
("点击以下新闻: 三星继承人从南韩监狱中解脱出来", "DIRECT", "0", "bbc", "zh"),

("Click on the following news segment: From a broken neck to a Rhodes Scholarship at Oxford", "DIRECT", "1", "bbc", "en"),
("点击以下新闻: 从断脖子到牛津的罗兹奖学金", "DIRECT", "1", "bbc", "zh"),

("Click on the following news segment: How Ikea has changed the way we shop", "DIRECT", "0", "bbc", "en"),
("点击以下新闻: 宜家如何改变了我们的购物方式", "DIRECT", "0", "bbc", "zh"),

("Click on the news about a challenge to become vegan", "INDIRECT", "1", "bbc", "en"),
("点击关于挑战的消息，成为素食主义者", "INDIRECT", "1", "bbc", "zh"),

("Click on the video that has to do with Indonesia", "INDIRECT", "0", "bbc", "en"),
("点击与印度尼西亚有关的视频", "INDIRECT", "0", "bbc", "zh"),

("Click on the news article about the president refusing to step down", "INDIRECT", "1", "bbc", "en"),
("点击关于总统拒绝下台的新闻文章", "INDIRECT", "1", "bbc", "zh"),

("Click on the picture where a soccer player kisses a trophy", "INDIRECT", "0", "bbc", "en"),
("点击足球运动员亲吻奖杯的图片", "INDIRECT", "0", "bbc", "zh"),

("Follow the page on Twitter", "FUNCTIONAL", "1", "bbc", "en"),
("按照Twitter上的页面", "FUNCTIONAL", "1", "bbc", "zh"),


-- Get whether to use bbc or qq.....

-- Query to insert all the data into the tables
INSERT INTO Main (Site, Language) VALUES("site here", "language here"); SELECT LAST_INSERT_ID();

INSERT INTO Questions (MainId, QuestionId, Correct, StartTime, EndTime) VALUES("main id here", "Question id here", "Correct INT", "StartTime TIME", "EndTime TIME");SELECT LAST_INSERT_ID();

INSERT INTO Actions (QuestionsId, PosX, PosY, ScreenWidth, ScreenHeight, RelativeX, RelativeY, RelativeTime) VALUES ("QuestionsId int","PosX int","PosY int","ScreenWidth int","ScreenHeight int","RelativeX int","RelativeY int","RelativeTime TIME");

INSERT INTO Sus (MainId, Question1, Question2... ) VALUES("MainId", "Question1", "Question2...");
