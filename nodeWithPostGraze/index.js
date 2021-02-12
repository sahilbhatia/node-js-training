const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();
port = process.env.PORT;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
})
)
app.use('/', router);
app.listen(port, function () {
	console.log(`running on port ${port}`);
})

