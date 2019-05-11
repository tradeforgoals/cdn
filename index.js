const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3003

app.use(express.static(path.join(__dirname, 'cdn')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))