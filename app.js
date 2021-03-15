const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send(' TEST APP IN JS FOR HKMT CI/CD PIPELINE 


    Mas Text added here... Prep for Manual Review


'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
