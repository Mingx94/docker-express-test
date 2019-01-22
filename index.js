const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello teeeeeeeeeeeeeeeeest');
})

app.listen(8080);