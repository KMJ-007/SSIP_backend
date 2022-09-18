// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create({
    session: 'session-name', //name of session
    multidevice: true // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage(async (message) => {
    console.log("message body", message.body);
    if (message.body === 'Hi' && message.isGroupMsg === false) {


      const list = [
        {
          title: "Pasta",
          rows: [
            {
              title: "Ravioli Lasagna",
              description: "Made with layers of frozen cheese",
            }
          ]
        },
        {
          title: "Dessert",
          rows: [
            {
              title: "Baked Ricotta Cake",
              description: "Sweets pecan baklava rolls",
            },
            {
              title: "Lemon Meringue Pie",
              description: "Pastry filled with lemonand meringue.",
            }
          ]
        }
      ];
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
        },
        {
          "buttonText": {
            "displayText": "Text of Button 3"
          }
        },
        {
          "buttonText": {
            "displayText": "Text of Button 4"
          }
        }
      ]
      console.log("msg from", message.from)
      // await client.sendListMenu(`9909912610@c.us`, 'Title', 'subTitle', 'Description', 'menu', list)
      //   .then((result) => {
      //     console.log('Result: ', result); //return object success
      //   })
      //   .catch((erro) => {
      //     console.error('Error when sending: ', erro); //return object error
      //   });
      await client.sendButtons(message.from, 'Title', buttons, 'Description')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
    else {
      await client.sendText(message.from, "This is a text message")
    }
  });
}
