const express = require('express')
const db = require('../db/client')

const router = express.Router()
const helloKey = 'hello'
const defaultMessage = 'Hello'

router.get('/', function (req, res) {
  console.log('hello')

  db.client().get(helloKey, db.toPromise).then(function(result) {
    res.status(200).send(result)
  }).catch(function(err) {
    res.status(200).send(defaultMessage)
  })
})

/*
router.get('/set', function (req, res) {
  const hello = req.query[helloKey] || defaultMessage

  db.client().set(helloKey, hello)
  res.status(200).send(hello)
})
*/

module.exports = {
  helloResource: router
}
