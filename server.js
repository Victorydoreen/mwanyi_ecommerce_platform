const express = require('express')
const app = express();
const path = require('path');

app.use(express.static('./src')) //assuming src folder will hold all assets.
app.get('/', (req, res) => res.sendFile(path.join(__dirname) + '/index.html'))
app.listen(3000, () => console.log('app listening on port 3000!'))