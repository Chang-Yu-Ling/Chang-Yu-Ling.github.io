#!/usr/bin/env node
//====== initial ===================================================================================================
const express = require('express')     // include `express`

const app = express()          // create an express, aka web server, instance

const port = 9998

//====== url ====================================================================================================
app.get('/step2', (req, res) => {       // handle `/step1` url
  // response browser
  res.send('<h1 id="return">hello world</h1>')
})

app.listen(port, () => {               // start the server
  console.log(`listening on port: ${port}`)
})

//====== 相對url =================================================================================================
app.use(express.static(`${__dirname}/dist`))     // handle other urls

//======== 記數 ==================================================================================================
let nRequests = 0                           // handle `/step4` url

app.get('/step4', (req, res) => {
  res.send(`this is request #${++nRequests}`)
})

//======== form回傳 ==================================================================================================
app.get('/step5', (req, res) => {          //`[host]:[port]/step5?fname=[fname]&lname=[lname]`                  //ajax_form回傳(login用)
  res.send(`<h1>Welcome come, ${req.query.fname} !</h1>`)                                                                                                                              
})

//======= 針對同樣網址回傳不同結果 ======================================================================================================
const bodyParser = require('body-parser')            // include `body-parser`

app.use(bodyParser.urlencoded({ extended: false }))   // setup `body-parser`

app.use(bodyParser.json())

app.post('/step7', (req, res) => {            // `app.post()` 而非 `app.get()`==>針對同樣網址回傳不同結果

  // `bady-parser` stores parsed data in `req.body`
  res.send(`<h1>Hello, ${req.body.fname} ${req.body.lname}</h1>`)
})