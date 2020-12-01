
/** @module Contacts*/

import sqlite from 'sqlite-async'

/**
 * Contacts
 * ES6 module that manages the contacts in the CRM system.
 */

class Contacts {
  /**
   * Create an account object
   * @param {String} [dbNmae=":memory:"] - The name of the database file to use.
   */
  
  constructor(dbName = 'memory:') {
    return (async() => {
      this.db = await sqlite.open(dbName)
      // we need this table to store the user accounts
      const sql = 'CREATE TABLE IF NOT EXISTS contacts(\
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        userid INTEGER,\
        firstname TEXT NOT NULL,\
        lastname TEXT NOT NULL,\
        cause TEXT NOT NULL,\
        lastcontact INTEGER,\
        FOREIGN KEY(userid) REFERENCES users(id)\
      );'
      await this.db.run(sql)
      return this
    })()
  }
  
  /**
   * retrives all the contacts in the system
   * @returns {Array} returns an array containing all the contacts in the database
   */
  
  async all() {
    const sql = 'SELECT users.user, contacts.* FROM contacts, users\
                  WHERE contacts.userid = users.id;'
    const contacts = await this.db.all(sql)
    return contacts
  }
}

export default Contacts
