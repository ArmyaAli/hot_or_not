const express = require( "express" );
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app
.get( "/", ( req, res ) => {
    res.send( "Express Backend" );
})
.post("/", (req, res) => {
    console.log(req)
    res.send( "" );
    
    // databaseQuery();
})

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );