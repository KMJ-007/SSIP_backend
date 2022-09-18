// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const { ListenerLayer } = require('venom-bot/dist/api/layers/listener.layer');

venom
    .create({
        session: 'Test-Session', //name of session
        multidevice: false // for version not multidevice use false.(default: true)
    })
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });

function start(client) {
    client.onMessage(async (message) => {
        if (message.body === 'Hi' && message.isGroupMsg === false) {
            client
                .sendText(message.from, 'Hello')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
        else if (message.body == "button" && message.isGroupMsg == false) {
            const buttons = [
                {
                    "buttonText": {
                        "displayText": "Text of Button 1"
                    }
                },
                {
                    "buttonText": {
                        "displayText": "Text of Button 2"
                    }
                }
            ]
            await client.sendButtons(message.from, 'Title', buttons, 'Description')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
        }
        else if (message.body == "Text of Button 1" && message.isGroupMsg == false) {

            client.sendText(message.from, "you have selected text 1");
        }
        else if (message.body == "list" && message.isGroupMsg == false) {
            const list = [
                {
                    title: "This is a List",
                    rows: [
                        { title: "Option 1", description: "description of option 1" },
                        { title: "Option 2", description: "description of option 2" },
                        { title: "Option 3", description: "description of option 3" }
                    ]
                }
            ];
            await client.sendListMenu(message.from, 'Title', 'subTitle', 'Description', 'menu', list)
                .then((result) => {
                    console.log('Result: ', result); //return object success
                    console.log("A List is requested from " + message.from);
                })
        }
    });
}