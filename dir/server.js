const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname)));

app.get('/output.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'output.json'));
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});