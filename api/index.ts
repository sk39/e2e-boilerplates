import express from 'express'
import testApi from './routes/testApi'
require('@sk39/dotenv-ex').config()
const app: express.Express = express()
const http = require('http').createServer(app)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/test', testApi)


const port = process.env.PORT || 3333
http.listen(port, () => {
  console.log(`Pref test server listening on port ${port}!`)
})
