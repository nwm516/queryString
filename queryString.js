import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {

    let name = req.query.name;
    let job = req.query.job;
    let faveColor = req.query.faveColor;
    
    console.log("Contents of the query string:" , req.query);
    console.log("");

    res.type('text/plain');
    res.send("Gotta /get it...")
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send("404 - Not Found");
});

app.listen(app.get('port'), () => {
    console.log("-- YOU ARE NOW CONNECTED. WELCOME. ---");
});