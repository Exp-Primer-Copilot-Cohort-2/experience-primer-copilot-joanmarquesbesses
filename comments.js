//Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Create a list of comments
const comments = [];
//Create a route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});
//Create a route to post a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).json(comment);
});
//Start the server
app.listen(3001, () => {
    console.log('Server listening on port 3001');
});