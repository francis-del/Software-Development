
--data needed to implement the home screen
CREATE TABLE IF NOT EXISTS contacts(
 id INTEGER PRIMARY KEY AUTOINCREMENT,
  userid INTEGER,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  cause VARCHAR,
  lastcontact INTEGER,
  FOREIGN KEY(userid) REFERENCES users(id)
  
);

INSERT INTO contacts(userid, firstname, lastname, cause, lastcontact)
 VALUES(1, "Mark", "Randy", "ebola", CURRENT_TIMESTAMP);
INSERT INTO contacts(userid, firstname, lastname, cause, lastcontact)
 VALUES(1,"Chris", "Smalling", "coronavirus", CURRENT_TIMESTAMP);
INSERT INTO contacts(userid, firstname, lastname, lastcontact)
  VALUES(1, "Steve", "Jobs", CURRENT_TIMESTAMP);
INSERT INTO contacts(userid, firstname, lastname, cause, lastcontact)
  VALUES(1,"John", "Doe", "ebola", CURRENT_TIMESTAMP);
