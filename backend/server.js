const express = require('express');
const cors = require('cors');
let lolChampions = require("lol-champions");
// console.log(lolChampions);

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send(lolChampions);
});

app.listen(4000, () => {
    console.log('Listening on post 4000');
    console.log('http://localhost:4000');
});