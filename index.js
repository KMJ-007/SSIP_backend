const express = require('express');
const Chalk = require('chalk');

const app = express();
const port = 4000;

const publicpath = __dirname + '\\public\\';
console.log(publicpath);
app.use('/public', express.static(publicpath));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/Index.html');
})

app.listen(port, (error) => {
    if (error) {
        console.log('error in listening server');
    }
    else {
        // Chalk.greenBright(`Server is listening on http:/localhost:${port}`);
        console.log(`Server is listening on http:/localhost:${port}`);
    }
})
