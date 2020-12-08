
--data needed to implement the home screen
CREATE TABLE IF NOT EXISTS contacts(
 id INTEGER PRIMARY KEY AUTOINCREMENT,
  userid INTEGER,
  cause TEXT,
  photo TEXT,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL, 
  fund TEXT NOT NULL,
  pledge TEXT NOT NULL,
  url TEXT,
  deadline DATE,
  FOREIGN KEY(userid) REFERENCES users(id)
  
);

INSERT INTO contacts(userid, firstname, lastname, cause, photo, url, fund, pledge, deadline)
 VALUES(1, "Mark", "Randy", "Coronavirus", "avatar.png", "https://www.unison.org.uk/content/uploads/2020/03/corona-4881364_1920-745x420.jpg", "£2000", "£200", "23/06/2020");
INSERT INTO contacts(userid, firstname, lastname, cause, photo, url, fund, pledge, deadline)
 VALUES(1,"Chris", "Smalling", "Disaster", "avatar.png", "https://www.infoplease.com/sites/infoplease.com/files/inline-images/Tohoku%20Aftermath.jpg", "£500", "£100", "25/07/2020");
INSERT INTO contacts(userid, firstname, lastname, photo, url, fund, pledge, deadline, cause)
  VALUES(1, "Steve", "Jobs", "avatar.png", "https://www.infoplease.com/sites/infoplease.com/files/inline-images/Tohoku%20Aftermath.jpg", "£500", "£100", "30/8/2020", "Disaster");
INSERT INTO contacts(userid, firstname, lastname, url, fund, cause, pledge, deadline)
  VALUES(1,"John", "Doe", "https://medlineplus.gov/ency/images/ency/fullsize/17160.jpg", "£400", "Ebola", "£50", "23/11/2020");
