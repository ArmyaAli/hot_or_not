import express from 'express'
import Formidable from 'formidable'
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
            console.log('Categories: ', fields.cat);
            console.log('filePath: ', fields.path);
            // console.log('Files', files)
            // console.log(files["image"]["path"])
            // res.send("<div>YOYOYOYO</div>")
            // addRow()
            // res.sendFile(files["image"]["path"])
            res.send("Complete")
        })

        // databaseQuery();
    })

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});