let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let db = require('./models')
let routes = require('./app/routes/api.js')
let PORT = process.env.PORT || 3000

// Sets

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use(express.static('app/public'))

routes(app, db)

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}`)
  })
})
