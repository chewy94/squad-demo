const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.get('/user', (req, res) => res.send('Chloe Ku'))

app.listen(port, () => console.log(`App is running on port ${port}`))
