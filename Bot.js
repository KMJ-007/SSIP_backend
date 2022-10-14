// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const GTU = require('./Data/SelectionData');
const fs = require('fs');



// fs.rmdirSync('./tokens/*')
// .catch(err,()=>{

// });


//*********************************************This is for dhyanesh testing purpose 
// fs.rmdirSync('/QRimage.png', { recursive: true, force: true });
// ***************************************************************************


function startTheBot(){

console.log("starting your bot");
venom
    .create(
        'GTU-session',
        (base64Qr, asciiQR, attempts, urlCode) => {
            // console.log(asciiQR); // Optional to log the QR in the terminal
            let matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
                response = {};

            if (matches.length !== 3) {
                return new Error('Invalid input string');
            }
            response.type = matches[1];
            response.data = new Buffer.from(matches[2], 'base64');

            let imageBuffer = response;
            require('fs').writeFile(
                '/QRimage.png',
                imageBuffer['data'],
                'base64',
                function (err) {
                    if (err != null) {
                        console.log(err);
                    }
                }
            );

        },
        undefined,
        {  multidevice: true,
            logQR: false 
        }
    )
    .then((client) => {
        console.log()
        start(client);

    })
    .catch((erro) => {
        console.log(erro);
    });

function start(client) {
    console.log("bot is in the start function")
    const endingMessage = async (message) => {
        // const EndingButtons = [
        //     {
        //         "buttonText": {
        //             "displayText": "Yes"
        //         }
        //     },
        //     {
        //         "buttonText": {
        //             "displayText": "No"
        //         }
        //     }
        // ]
        // await client.sendButtons(message.from, 'Are you satisfied?', EndingButtons, 'Hope you got your answers.')
        //     .then((result) => {
        //         console.log('Result: ', result); //return object success
        //     })
        //     .catch((erro) => {
        //         console.error('Error when sending: ', erro); //return object error
        //     });

        await client
            .sendText(
                message.from,
                "Thank you!! Hope we solved your Query 😊"
            )
            .then((result) => {
                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
    }
    client.onMessage(async (message) => {
        console.log(message);
        //******** */ course selection
        if (message.body === 'Academics' && message.isGroupMsg === false) {
            console.log(message);
            const AcademicsOptions = [
                {
                    "buttonText": {
                        "displayText": "Course"
                    }
                },
                {
                    "buttonText": {
                        "displayText": "Admission"
                    }
                },
                {
                    "buttonText": {
                        "displayText": "Exam"
                    }
                }
            ]
            await client.sendButtons(message.from, 'Academics:', AcademicsOptions, 'Here are some options Academic Options')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });

        }
        //******** */ course selection
        // else if (message.body === 'Fees' && message.isGroupMsg === false) {
        //     console.log(message);
        //     const courseList = [
        //         {
        //             title: "Query:",
        //             rows: [
        //                 { title: "Bachelor in Engineering(BE)", description: "" },
        //                 { title: "Diploma in Engineering(DI)", description: "" },
        //                 { title: "Bachelor in Pharmacy(BP)", description: "" }
        //             ]
        //         }
        //     ];
        //     client.sendListMenu(message.from, '', '', 'Course enrolled:', 'Select', courseList)
        //         .then((result) => {
        //             // console.log('Result: ', result); //return object success
        //             console.log("A List is requested from " + message.from);
        //         })
        // }
        //******** */ course selection
        else if (message.body === 'Course' && message.isGroupMsg === false) {
            console.log(message);
            const courseList = [
                {
                    title: "Query:",
                    rows: [
                        { title: "Bachelor in Engineering(BE)", description: "" },
                        { title: "Diploma in Engineering(DI)", description: "" },
                        { title: "Bachelor in Pharmacy(BP)", description: "" }
                    ]
                }
            ];
            client.sendListMenu(message.from, '', '', 'Course enrolled:', 'Select', courseList)
                .then((result) => {
                    // console.log('Result: ', result); //return object success
                    console.log("A List is requested from " + message.from);
                })
        }
        //******************************subject selection in BE
        else if (message.body === 'Bachelor in Engineering(BE)' && message.isGroupMsg === false) {
            console.log(message);
            const courseList = [
                {
                    title: "Query:",
                    rows: [
                        { title: "Computer Enginnering", description: "" },
                        { title: "Information and Technology", description: "" },
                        { title: "Electronics and Communictaion", description: "" },
                        { title: "Electrical Engineering", description: "" },
                        { title: "Civil Engineering", description: "" },
                        { title: "Mechanical Engineernig", description: "" },
                        { title: "Chemical Enginnering", description: "" },
                        { title: "Power Electronics", description: "" }
                    ]
                }
            ];
            await client.sendListMenu(message.from, '', '', 'For which branch would like to inquire ?', 'Select', courseList)
                .then((result) => {
                    // console.log('Result: ', result); //return object success
                    console.log("A List is requested from " + message.from);
                })
        }



        //***************************************Computer Engineering
        else if (message.body === 'Computer Enginnering' && message.isGroupMsg === false) {
            console.log(message);
            const semList = [
                {
                    title: "Query:",
                    rows: [
                        { title: "1/2", description: "" },
                        { title: "3", description: "" },
                        { title: "4", description: "" },
                        { title: "5", description: "" },
                        { title: "6", description: "" },
                        { title: "7", description: "" },
                        { title: "8", description: "" }
                    ]
                }
            ];
            await client.sendListMenu(message.from, '', '', 'Select the semister:', 'Select', semList)
                .then((result) => {
                    // console.log('Result: ', result); //return object success
                    console.log("A List is requested from " + message.from);
                })
        }
        //*************************************** sem1
        else if (message.body === '1/2' && message.isGroupMsg === false) {
            console.log(message);
            const semList = [
                {
                    title: "Query:",
                    rows: [
                        { title: "Chemistry", description: "" },
                        { title: "English", description: "" },
                        { title: "Programming for Problem Solving", description: "" },
                        { title: "Basic Electrical Engineering", description: "" },
                        { title: "Basic Mechanical Engineering", description: "" },
                        { title: "Environmental Sciences", description: "" },
                        { title: "Workshop/Manufacturing Practices", description: "" },
                        { title: "Engineering Graphics Design", description: "" },
                        { title: "Mathematics - 1", description: "" },
                        { title: "Mathematics - 2", description: "" },
                        { title: "Basic Electronics", description: "" },
                        { title: "Induction Program", description: "" },
                        { title: "Physics", description: "" }
                    ]
                }
            ];
            await client.sendListMenu(message.from, '', '', 'Please select subject from the below list: ', 'Select', semList)
                .then((result) => {
                    // console.log('Result: ', result); //return object success
                    console.log("A List is requested from " + message.from);
                })

        }

        else if (!(GTU.Course.BE.Computer_Engineering.one[message.body] == undefined) && message.isGroupMsg === false) {
            console.log(message);

            await client
                .sendFile(
                    message.from,
                    GTU.Course.BE.Computer_Engineering.one[message.body],
                    message.body + ' Syllabus',
                    'See my file in pdf'
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
            endingMessage(message)
        }


        //***************************************sem-3
        else if (message.body === '3' && message.isGroupMsg === false) {
            console.log(message);
            const subjectList = [
                {
                    title: "Query:",
                    rows: [
                        { title: "Effective Technical Communication", description: "" },
                        { title: "Probability and Statistics", description: "" },
                        { title: "Indian Constitution", description: "" },
                        { title: "Design Engineering - I A", description: "" },
                        { title: "Data Structures", description: "" },
                        { title: "Database Management Systems", description: "" },
                        { title: "Digital Fundamentals", description: "" }
                    ]
                }
            ];
            await client.sendListMenu(message.from, '', '', 'Select the subject:', 'Select', subjectList)
                .then((result) => {
                    // console.log('Result: ', result); //return object success
                    console.log("A List is requested from " + message.from);
                })
        }
        //***************************************Effective Technical Communication
        else if (!(GTU.Course.BE.Computer_Engineering.three[message.body] == undefined) && message.isGroupMsg === false) {
            console.log(message);

            await client
                .sendFile(
                    message.from,
                    GTU.Course.BE.Computer_Engineering.three[message.body],
                    message.body + ' Syllabus',
                    'See my file in pdf'
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
            endingMessage(message)
        }


        //***************************************sem-4
        else if (message.body === '4' && message.isGroupMsg === false) {
            console.log(message);
            const subjectList = [
                {
                    title: "Query:",
                    rows: [
                        { title: "Design Engineering 1 B", description: "" },
                        { title: "Operating System", description: "" },
                        { title: "Object Oriented Programming -I", description: "" },
                        { title: "Computer Organization & Architecture", description: "" },
                        { title: "Discrete Mathematics", description: "" },
                        { title: "Principles of Economics and Management", description: "" },
                    ]
                }
            ];
            await client.sendListMenu(message.from, '', '', 'Select the subject:', 'Select', subjectList)
                .then((result) => {
                    // console.log('Result: ', result); //return object success
                    console.log("A List is requested from " + message.from);
                })
        }
        //***************************************Effective Technical Communication
        else if (!(GTU.Course.BE.Computer_Engineering.four[message.body] == undefined) && message.isGroupMsg === false) {
            console.log(message);
            await client
                .sendFile(
                    message.from,
                    GTU.Course.BE.Computer_Engineering.four[message.body],
                    message.body + ' Syllabus',
                    'See my file in pdf'
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
            endingMessage(message);
        }


        //***************************************sem-5
        else if (message.body === '5' && message.isGroupMsg === false) {
            console.log(message);
            const subjectList = [
                {
                    title: "Query:",
                    rows: [
                        { title: "Contributor Personality Development Program", description: "" },
                        { title: "Integrated Personality Development Course", description: "" },
                        { title: "Analysis and Design of Algorithms", description: "" },
                        { title: "Professional ethics", description: "" },
                        { title: "Computer Networks", description: "" },
                        { title: "Software Engineering", description: "" },
                        { title: "Computer Graphics", description: "" },
                        { title: "Python for Data Science", description: "" },
                        { title: "Cyber Security", description: "" }
                    ]
                }
            ];
            await client.sendListMenu(message.from, '', '', 'Select the subject:', 'Select', subjectList)
                .then((result) => {
                    // console.log('Result: ', result); //return object success
                    console.log("A List is requested from " + message.from);
                })
        }
        //***************************************
        else if (!(GTU.Course.BE.Computer_Engineering.five[message.body] == undefined) && message.isGroupMsg === false) {
            console.log(message);

            await client
                .sendFile(
                    message.from,
                    GTU.Course.BE.Computer_Engineering.five[message.body],
                    message.body + ' Syllabus',
                    'See my file in pdf'
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
            endingMessage(message)
        }


        //***************************************sem-6
        else if (message.body === '6' && message.isGroupMsg === false) {
            console.log(message);
            const subjectList = [
                {
                    title: "Query:",
                    rows: [
                        { title: "Contributor Personality Development Program", description: "" },
                        { title: "Integrated Personality Development Course", description: "" },
                        { title: "Theory of Computation", description: "" },
                        { title: "Advanced Java Programming", description: "" },
                        { title: "Microprocessor and Interfacing", description: "" },
                        { title: "Web Programming", description: "" },
                        { title: "Data Mining", description: "" },
                        { title: "System Software", description: "" },
                        { title: "IOT and applications", description: "" },
                        { title: "Data Visualization", description: "" }
                    ]
                }
            ];
            await client.sendListMenu(message.from, '', '', 'Select the subject:', 'Select', subjectList)
                .then((result) => {
                    // console.log('Result: ', result); //return object success
                    console.log("A List is requested from " + message.from);
                })
        }
        //***************************************Effective Technical Communication
        else if (!(GTU.Course.BE.Computer_Engineering.six[message.body] == undefined) && message.isGroupMsg === false) {
            console.log(message);

            await client
                .sendFile(
                    message.from,
                    GTU.Course.BE.Computer_Engineering.six[message.body],
                    message.body + ' Syllabus',
                    'See my file in pdf'
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
            endingMessage(message)
        }


        //***************************************sem-6
        else if (message.body === '7' && message.isGroupMsg === false) {
            console.log(message);
            const subjectList = [
                {
                    title: "Query:",
                    rows: [
                        { title: "Summer Internship", description: "" },
                        { title: "Complier Design", description: "" },
                        { title: "Mobile Computing and Wireless communication", description: "" },
                        { title: "Artificial Intelligence", description: "" },
                        { title: "Cloud Computing", description: "" },
                        { title: "Information Retrieval", description: "" },
                        { title: "Distributed System", description: "" },
                        { title: "Information security", description: "" },
                        { title: "Parallel and Distributed Computing", description: "" },
                        { title: "Big Data Analytics", description: "" },
                        { title: "Natural Language Processing", description: "" },
                        { title: "Machine Learning", description: "" },
                        { title: "Digital forensics", description: "" },
                        { title: "Mobile Application Development", description: "" }
                    ]
                }
            ];
            await client.sendListMenu(message.from, '', '', 'Select the subject:', 'Select', subjectList)
                .then((result) => {
                    // console.log('Result: ', result); //return object success
                    console.log("A List is requested from " + message.from);
                })
        }
        //***************************************Effective Technical Communication
        else if (!(GTU.Course.BE.Computer_Engineering.seven[message.body] == undefined) && message.isGroupMsg === false) {
            console.log(message);


            await client
                .sendFile(
                    message.from,
                    GTU.Course.BE.Computer_Engineering.seven[message.body],
                    message.body + ' Syllabus',
                    'See my file in pdf'
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }


        //***************************************sem-6
        else if (message.body === '8' && message.isGroupMsg === false) {
            console.log(message);
            const subjectList = [
                {
                    title: "Query:",
                    rows: [
                        { title: "Internship/Project", description: "" }
                    ]
                }
            ];
            await client.sendListMenu(message.from, '', '', 'Select the subject:', 'Select', subjectList)
                .then((result) => {
                    // console.log('Result: ', result); //return object success
                    console.log("A List is requested from " + message.from);
                })
        }
        else if (!(GTU.Course.BE.Computer_Engineering.eight[message.body] == undefined) && message.isGroupMsg === false) {
            console.log(message);

            await client
                .sendFile(
                    message.from,
                    GTU.Course.BE.Computer_Engineering.eight[message.body],
                    message.body + ' Syllabus',
                    'See my file in pdf'
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
            endingMessage(message)
        }


        //********************************* Admission section
        else if (message.body === 'Admission' && message.isGroupMsg === false) {
            console.log(message);
            const AdmissionOptions = [
                {
                    "buttonText": {
                        "displayText": "Admission updates"
                    }
                },
                {
                    "buttonText": {
                        "displayText": "Past Year Cut-off"
                    }
                }
            ]
            await client.sendButtons(message.from, 'Admission Updates:', AdmissionOptions, 'Here are some options for Admission updates.')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });

        }
        else if (message.body == "Admission updates" && message.isGroupMsg === false) {
            console.log(message);

            await client
                .sendLinkPreview(
                    message.from,
                    "https://admission.gtu.ac.in/circular.aspx"
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
        else if (message.body == "Past Year Cut-off" && message.isGroupMsg === false) {
            console.log(message);
            await client
                .sendFile(
                    message.from,
                    './Data/PDFs/2021_Cutoff.pdf',
                    '2021 Cut-off list',
                    'See my file in pdf'
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
            endingMessage(message)
        }

        //************************* Examination section
        else if (message.body === 'Exam' && message.isGroupMsg === false) {
            console.log(message);
            const ExamOptions = [
                {
                    "buttonText": {
                        "displayText": "Time Table"
                    }
                },
                {
                    "buttonText": {
                        "displayText": "Result Updates"
                    }
                }

            ]
            await client.sendButtons(message.from, 'Examination Updates:', ExamOptions, 'Here are some options for Examination updates.')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
        //************************* Fees section
        else if (message.body === 'Fees' && message.isGroupMsg === false) {
            console.log(message);
            const ExamOptions = [
                {
                    "buttonText": {
                        "displayText": "Enrollment Fees"
                    }
                },
                {
                    "buttonText": {
                        "displayText": "Exam Fees"
                    }
                }

            ]
            await client.sendButtons(message.from, 'Examination Updates:', ExamOptions, 'Here are some options for Examination updates.')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }

        //this is for exam fees
        else if (message.body == "Exam Fees" && message.isGroupMsg === false) {
            await client
                .sendText(message.from, `Please enter your enrollment no.`)
                .then((result) => {
                    console.log(' exam fees status from ', message.from); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }

        else if (!(GTU.Examination[message.body] == undefined) && message.isGroupMsg === false) {
            console.log(message);

            await client
                .sendLinkPreview(
                    message.from,
                    GTU.Examination[message.body]
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
            endingMessage(message)
        }

        else if (!(GTU.ExamFeesStatus[message.body] == undefined) && message.isGroupMsg === false) {
            console.log(message);

            await client
                .sendText(
                    message.from,
                    GTU.ExamFeesStatus[message.body]
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
        else if (message.body == "No,your exam fees is pending" && message.isGroupMsg === false) {
            console.log(message);

            await client
                .sendText(
                    message.from,
                    GTU.Exam_fees_Status[message.body]
                )
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
            endingMessage(message)
        }
        else if (message.body == "Other" && message.isGroupMsg === false) {
            console.log(message);
            const OthersList = [
                {
                    title: "Query:",
                    rows: [
                        { title: "Scholarship", description: "" },
                        { title: "100 Points Activity", description: "" },
                        { title: "Events", description: "" },
                        { title: "Things I should Know", description: "" },
                        // { title: "Things I should Know", description: "" },
                    ]
                }
            ];
            await client.sendListMenu(message.from, '', '', 'these are', 'Select', OthersList)
                .then((result) => {
                    // console.log('Result: ', result); //return object success
                    console.log("A List is requested from " + message.from);
                })

        }
        else if ((message.body == "Circular" || message.body == "Circular") && message.isGroupMsg === false) {
            console.log(message);
            await client
                .sendText(message.from, `You are subscribed for new circular updates`)
                .then((result) => {
                    console.log(' exam fees status from ', message.from); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });

        }

        //***************************** welcome message
        else if (message.isGroupMsg === false) {
            await client
                .sendText(message.from, `Hello ${message.notifyName}!\nWelcome to GTU Portal.`)
                .then((result) => {
                    console.log(' Welcome message from ', message.from); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });

            const welcomeList = [
                {
                    "buttonText": {
                        "displayText": "Academics"
                    }
                },
                {
                    "buttonText": {
                        "displayText": "Fees"
                    }
                },
                {
                    "buttonText": {
                        "displayText": "Other"
                    }
                }
            ]
            await client.sendButtons(message.from, 'What brings you to us ?', welcomeList, 'It brings us immense pleasure to be of help to you! 😊You can choose from the below mentioned options, relevant to your query:')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }

    });


}
}
module.exports = startTheBot;