const express = require('express');

const app = express();

app.listen(4000, () => {
    console.log('Listening on post 4000');
    console.log('http://localhost:4000');
});