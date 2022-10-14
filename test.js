const fs = require('fs');
const venom = require('venom-bot');
venom
    .create(
        'Test-session',
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
                './public/QRimage.png',
                imageBuffer['data'],
                'binary',
                function (err) {
                    if (err != null) {
                        console.log(err);
                    }
                }
            );
        },
        undefined,
        { logQR: false }
    )
    .then((client) => {
        start(client);
    })
    .catch((erro) => {
        console.log(erro);
        fs.unlink(__dirname + '/public/QRimage.png', () => {
            console.log('QR is deleted');
        });
    });


function start(client) {
    client.onMessage((message) => {
        if (message.body === 'Hi' && message.isGroupMsg === false) {
            client
                .sendText(message.from, 'Welcome Venom 🕷')
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
    });
}
module.exports = a;