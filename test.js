// const venom = require('venom-bot');
// const { ListenerLayer } = require('venom-bot/dist/api/layers/listener.layer');
const GTU = require('./SelectionData');
const prompt = require('prompt-sync')({ sigint: true });
// console.log(GTU.Course.BE.Computer_Engineering);

// venom
//     .create({
//         session: 'Test-Session', //name of session
//         multidevice: true // for version not multidevice use false.(default: true)
//     })
//     .then((client) => start(client))
//     .catch((erro) => {
//         console.log(erro);
//     });

selector = (key) => {
    let a;
    a = prompt("Enter the key");
    if (key[a] == undefined) {
        console.log(key);
        return key;
    }
    selector(key[a]);
}

let NewKey = selector(GTU);

console.log(NewKey);

// const course = {

//     Chemistry: "https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3110002.pdf",
//     English: "https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3110002.pdf",
//     Programming_for_Problem_Solving: "https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3110003.pdf",
//     Basic_Electrical_Engineering: "https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3110005.pdf",
//     Basic_Mechanical_Engineering: "https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3110006.pdf",
//     Environmental_Sciences: "https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3110007.pdf",
//     Workshop_Manufacturing_Practices: "https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3110012.pdf",
//     Engineering_Graphics_Design: "https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3110013.pdf ",
//     Mathematics_1: "https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3110014.pdf",
//     Mathematics_2: "https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3110015.pdf",
//     Basic_Electronics: "https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3110016.pdf",
//     Induction_Program: "https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3110017.pdf",
//     Physics: "https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3110018.pdf"


// }

// let courseFinder = (courseName) => {
//     if (course[courseName]) {
//         console.log(course[courseName]);
//         return course[courseName];
//     }
// }

// courseFinder("English")
