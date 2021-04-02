const express = require('express');
const app = express();
const axios = require('axios');
const port = 3001; // || process.env
const url = 'https://api.vk.com/method/photos.getAll?owner_id=59994655&access_token=1e40884cd5e33f7f7b165ee83bfcf821cca122b41217692ff89f964fd77f11828a4557bba68cd4fceb284&v=5.52';

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/get.images', (req, res) => {
  axios.get(url).then((response) => {
    res.json(response.data);
  }).catch((e) => {
    res.send(e);
  });
});

app.listen(port, () => console.log(`http://localhost:${port}`));
