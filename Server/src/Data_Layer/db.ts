import Formidable from 'formidable';
import path from 'path'
// let sqlite3 = require('sqlite3').verbose();
import sqlite3, { verbose } from 'sqlite3'
import {Response} from 'express';
export interface People {
    name: string
    gender: string
    categories: string[]
    filePath: string
}

export const establishConnection = () => {
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

export const readPeople = async (res: Response) => {
    return new Promise((resolve, reject) => {
        const db = establishConnection();
        db.all(`SELECT * FROM people`, (error, data) => {
            if (error) {
                reject(error); // optional: again, you might choose to swallow this error.
            } else {
                resolve({data}); // resolve the promise
            }
        });
        db.close();
    });
}