

--data needed to implement the home screen
CREATE TABLE IF NOT EXISTS contacts(
 id INTEGER PRIMARY KEY AUTOINCREMENT,
  userid INTEGER,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  cause TEXT NOT NULL,
  url TEXT,
  image TEXT,
  fund INTEGER UNSIGNED,
  pledge INTEGER  UNSIGNED,
  deadline DATE,
  lastcontact INTEGER,
  FOREIGN KEY(userid) REFERENCES users(id)
  
);

INSERT INTO contacts(userid, firstname, lastname, cause, url, image, fund, pledge, deadline, lastcontact)
 VALUES(1, "Mark", "Randy", "Coronavirus", "https://cutewallpaper.org/download.php?file=/21/thumbnail-background/Best-50-Background-YouTube-on-HipWallpaper-YouTube-.jpg", "image_1.jpg", "£500", "£50", "12/11/2020", CURRENT_TIMESTAMP);
INSERT INTO contacts(userid, firstname, lastname, cause, url, image, fund, pledge, deadline, lastcontact)
 VALUES(2, "Chris", "Smalling", "Coronavirus", "https://www.health.org.uk/sites/default/files/styles/landscape_3_2/public/2020-06/20200609_Responding%20to%20COVID-19_collection%20thumbnail.png?itok=YRRIJB7y", "image_2.jpg", "£200", "£100", "10/10/2020", CURRENT_TIMESTAMP);
INSERT INTO contacts(userid, firstname, lastname, cause, image, fund, pledge, deadline, lastcontact)
  VALUES(1, "Steve", "Jobs", "Disaster", "image_3.jpg", "£1000", "£500", "10/12/2020", CURRENT_TIMESTAMP);
INSERT INTO contacts(userid, firstname, lastname, cause, image, fund, pledge, deadline, lastcontact)
  VALUES(3, "John", "Doe", "Disaster", "image_3", "£2000", "£200", "10/06/2020", CURRENT_TIMESTAMP);
  INSERT INTO contacts(userid, firstname, lastname, cause, fund, deadline, lastcontact)
   VALUES(2, "John", "King", "Ebola", "£500", "2/01/2021", CURRENT_TIMESTAMP);
 INSERT INTO contacts(userid, firstname, lastname, cause, pledge, lastcontact)
    VALUES(4, "Dan", "Smith", "Ebola", "£200", CURRENT_TIMESTAMP);
