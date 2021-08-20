const express = require('express');
const app = express();
const axios = require('axios');
const vkGroupsColl = require('../groups.json');
const getRandom = require('../utils/getRandom');

const port = 3001;
const token = '1712f0859442e7a0e8ee242e0fa5c6da801d0d5daff4318143ef9445064f7d0d872ae874b1fc39d55aad2';
const vkGroups = Object.values(vkGroupsColl);
const vkGroup = vkGroups[getRandom(0, vkGroups.length - 1)];

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/get.images', (req, res) => {
  axios.get(`https://api.vk.com/method/wall.get?domain=${vkGroup}&count=15&filter=owner&access_token=${token}&v=5.52`)
    .then((response) => res.json(response.data))
    .catch((error) => res.send(error));
});

app.listen(port, () => console.log(`Port :${port}`));
