import Formidable from 'formidable';
import path from 'path'
// let sqlite3 = require('sqlite3').verbose();
import sqlite3, { verbose } from 'sqlite3'

interface People {
    name: string
    gender: string
    categories: string[]
    filePath: string
}

export const establishConnection = ()  => {
    const filePath = path.resolve(__dirname, '../../db/test.db')
    let sqlite3 = require('sqlite3').verbose();
    return new sqlite3.Database(filePath)
}

export const addRow = async (people: People) => {
    const db = establishConnection();
    const insert = `INSERT INTO people (name, gender, categories, filePath) values ('${people.name}', '${people.gender}', '${people.categories.join(', ')}', '${people.filePath}')`
    db.run(insert)
    db.close();
}