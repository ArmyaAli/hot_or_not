import express from 'express'
import Formidable from 'formidable';
import { addRow } from '../Data_Layer/db'

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Express Backend");
})
    .post("/", (req, res) => {
        const formidable = new Formidable.IncomingForm({
            uploadDir: __dirname + '/tmp',  // don't forget the __dirname here
            keepExtensions: true,
            multiples: true
        });


        formidable.parse(req, (err, fields, files) => {
            if (err) {
                console.error('Error', err)
                throw err
            }

            console.log('Name: ', fields.name);
            console.log('Gender: ', fields.gender);

            const catLen = Object.keys(fields).length - 2;
            const catArray = [];

            for (let i = 0; i < catLen + 1; ++i) {
                if (fields['cat' + `${i}`] !== undefined) {
                    catArray.push(fields['cat' + `${i}`])
                }
            }
            console.log('Categories: ', catArray.join(', '));

            console.log('filePath: ', files["image"]["path"]);
            addRow({ name: fields.name as string, gender: fields.gender as string, categories: catArray, filePath: files["image"]["path"] })
            
            res.send("Complete")
        })

    })

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});