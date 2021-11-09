const express = require('express')
const app = express()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const port = 3000

app.get('/', async (req, res) => {
  //Genero un string random
  let randomString = (Math.random() + 1).toString(36).substring(7);

  //Le pido al microservicio de python que haga el string uppercase
  let resp = await fetch(`http://flask:5000/?string=${randomString}`)
  randomString = await resp.text()

  //Le pido al microservicio de go que concatene un numero random
  resp = await fetch(`http://go-server:8081/?string=${randomString}`)
  randomString = await resp.text()
  console.log(randomString)
  res.send(randomString)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

