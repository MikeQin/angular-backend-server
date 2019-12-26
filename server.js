const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Hello from Node Server</h1>');
})

app.post('/enroll', (req, res) => {
  console.log(req.body);
  //throw new Error('Server Error: BROKEN'); // Express will catch this on its own. 
  res.status(200).send({ "message": "Data received" });
})

app.listen(PORT, () => {
  console.log('Server is running on localhost:' + PORT);
})