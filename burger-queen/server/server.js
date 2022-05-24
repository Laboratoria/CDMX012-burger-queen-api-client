const express = require('express')
const app = express()
const cors = require('cors')

const { db } = require('../db')

app.use(cors())

const corsOptions = {
  origin: 'http://localhost:3000',
  optionSuccessStatus: 200
}

app.get('/', cors(corsOptions), function (req, res) {
  res.json({ db })
})

app.listen(4000, () => {
  console.log('todobien:)')
})
