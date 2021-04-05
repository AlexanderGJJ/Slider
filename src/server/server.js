const express = require('express');
const app = express();
const axios = require('axios');
const vkGroupsColl = require('../groups.json');
const getRandom = require('../utils/getRandom');

const port = 3001;
const token = '1e40884cd5e33f7f7b165ee83bfcf821cca122b41217692ff89f964fd77f11828a4557bba68cd4fceb284';
const vkGroups = Object.values(vkGroupsColl);
const vkGroup = vkGroups[getRandom(0, vkGroups.length - 1)];

app.get('/api/get.images', (req, res) => {
  axios.get(`https://api.vk.com/method/wall.get?domain=${vkGroup}&count=15&filter=owner&access_token=${token}&v=5.52`)
    .then((response) => res.json(response.data))
    .catch((error) => res.send(error));
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => console.log(`Port :${port}`));
