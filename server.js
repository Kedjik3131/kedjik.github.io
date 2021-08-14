/**
* This is the main Node.js server script for your project
* Check out the two endpoints this back-end API provides in fastify.get and fastify.post below
*/
const express = require("express")
const http = require("http");
const path = require("path");
const app = express(); // satır hata veriyorsa kaldır.
const fetch = require('node-fetch');



  app.get('/growtopia/server_data.php', (req, res) => {
fetch('http://growtopia1.com/growtopia/server_data.php', { method: 'POST', body: 'a=1' })
    .then(res => res.text())
    .then(body => res.send(body));

})
app.listen(process.env.PORT, () => console.log('Port ayarlandı:' + process.env.PORT))
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`)
}, 15000);

