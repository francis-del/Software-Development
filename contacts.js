

/** @module Contacts*/

import sqlite from 'sqlite-async'
import mime from 'mime-types'
import fs from 'fs-extra'

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
  cause VARCHAR,\
   avatar TEXT,\
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
   for(const index in contacts) {
     if(contacts[index].photo === null) contacts[index].photo = 'placeholder.jpg'
    const dateTime = new Date(contacts[index].lastcontact * 1000)
    const date = `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()}`
    contacts[index].lastcontact = date
   }
   return contacts
  }
 
 async add(data) {
  console.log(data)
  let filename
  if(data.fileName) {
   filename = `${Date.now()}.${mime.extension(data.fileType)}` // millisecond timestamp
   console.log(filename)
   await fs.copy(data.filePath, `public/images/${filename}`)
  }
  const timestamp = Math.floor(Date.now() / 1000)
   try {
    const sql = `INSERT INTO contacts(userid, firstname, lastname, cause, avatar, lastcontact)\
                 VALUES(${data.account}, "${data.firstname}", "${data.lastname}",\
                  ${data.cause}", "${filename}", ${timestamp});`
   console.log(sql)
    await this.db.run(sql)
   return true
  } catch(err) {
   console.log(err)
   throw(err)
  }
 }
 
  async getByID(id) {
  const sql = `SELECT users.user, contacts.* FROM contacts, users\
                  WHERE contacts.userid = users.id AND contacts.id = ${id};`
   console.log(sql)
   const contact = await this.db.get(sql)
     if(contact.photo === null) contact.photo = 'placeholder.jpg'
    const dateTime = new Date(contact.lastcontact * 1000)
    const date = `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()}`
    contact.lastcontact = date
    return contact
   } catch(err) {
    console.log(err)
    throw err
   }

 async close() {
  await this.db.close()
 }
 
}
export default Contacts
