const express = require('express');
// const cors = require('cors');
const startBot = require('./Bot');
const app = express();
// app.use(cors({
//     origin: "*"
// }))

const publicpath = __dirname + '/public';
console.log(publicpath);
app.use(express.static(publicpath));

startBot();
app.get('/', async (req, res) => {
<<<<<<< HEAD
    startBot;
    console.log("hey you are at home route")
    res.sendFile(__dirname + "/views/Index.html");
});
app.get('/restart', async (req, res) => {
    startBot;
=======
    console.log("hey you are at home route")
    res.sendFile(__dirname + "/views/Index.html");
});
app.get('/restart',async(req,res)=>{
    startBot();
>>>>>>> ea7f778e3f51da92c26a94705a9ea21229dab39c
    res.sendFile(__dirname + "/views/Index.html");
})

app.listen(4000, (err) => {
    if (err) {
        console.log(error);
    } else {
        console.log("Server succesfully running and listening on port 4000");
    }
})