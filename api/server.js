const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const db = require('../employerInfo/employersModel.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    db.find()
        .then((info) => {
            res.status(200).json(info);
        })
        .catch((err) => {
            res.status(500).json({ message: 'unable to retrieve info from database', err })
        });
})

module.exports = server;