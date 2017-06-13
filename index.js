#!/usr/bin/env node

const net = require('net');
const log = require('yalm');

const config = {
    address: '127.0.0.1',
    port: 8765
};

const server = net.createServer(socket => {
    setTimeout(() => {
        socket.write(`0000000000000000 00 button1 remote1`);
    }, 2000);

    setTimeout(() => {
        socket.write(`0000000000000000 00 button2 remote1`);
        setTimeout(() => {
            socket.write(`0000000000000000 01 button2 remote1`);
            setTimeout(() => {
                socket.write(`0000000000000000 02 button2 remote1`);
            }, 400);
        }, 400);
    }, 4000);

    log.info('connect');

    socket.on('data', data => {
        data = data.toString().replace(/\n$/, '');
        const [cmd, ...args] = data.split(' ');
        log.info('<', cmd, args);
        const response = `BEGIN\n${data}\nSUCCESS\nEND`;
        log.info('>', JSON.stringify(response));
        socket.write(Buffer.from(response));
    });

    socket.on('close', () => {
        log.info('close');
        socket.destroy();
    });
});

server.listen(config.port, config.address, () => {
    log.info(`listening on ${config.address}:${config.port}`);
});

