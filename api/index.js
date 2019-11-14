const express = require('express')
const app = express()
const cors = require('cors')
const serverless = require('serverless-http')
const port = 3000

app.use(cors())

app.get('/user', (req, res) => res.send('Chloe Ku'))

app.listen(process.env.PORT || port, () => console.log(`App is running on port ${port}`))

module.exports.handler = serverless(app)
