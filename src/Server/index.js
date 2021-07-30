const express = require('express')
const app = express()
const port = 4000

const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello I want to rider bike!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})