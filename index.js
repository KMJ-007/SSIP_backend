const express = require('express');
// const cors = require('cors');
const startBot = require('./Bot');
const app = express();
// app.use(cors({
//     origin: "http://localhost:3000"
// }))

const publicpath = __dirname + '/public';
console.log(publicpath);
app.use( express.static(publicpath));

app.get('/', async (req, res) => {
    startBot;
    res.sendFile(__dirname + "/views/Index.html");
});


app.listen(4000, (err) => {
    if (err) {
        console.log(error);
    } else {
        console.log("Server succesfully running and listening on port 4000");
    }
})