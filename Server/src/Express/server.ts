import express from 'express'
import Formidable from 'formidable';
import { addRow, readPeople } from '../Data_Layer/db'

const _cors = require('cors');
const port = 8080; // default port to listen
const app = express();

app.use(_cors())

// define a route handler for the default home page
app.get("/", async (req, res) => {
    readPeople(res).then((value) => {
        console.log('completed')
        res.set('Content-Type', 'text/html');
        let requestedImages = ""
        value["data"].forEach(element => {
            const path = "http://127.0.0.1:8887/" + element.filePath.split('\\')[8]
            if(/(.jpg|.png|.jpeg|.gif)$/.test(path))
                requestedImages += `<div>\n<p>${element.name}</p>\n<p>${element.gender}</p>\n<p>${element.categories}</p>\n<img style="margin:8px;" src="${path}"height="100px" width='100px'/>
                </div>`
        });
        res.send(requestedImages);
    }).catch((error) => console.log(error))
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

