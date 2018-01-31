var Redis = require('ioredis');
var { appSettings } = require('../models/appSettings')

var state = {
  db: null,
  client: null
};

const factory = function(client) {
  return {
    appSettings: appSettings(client)
  }
};

const connect = function() {
  const db = new Redis({
    port: process.env.REDIS_PORT,          // Redis port, 6379
    host: process.env.REDIS_HOST,   // Redis host, 127.0.0.1
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: process.env.REDIS_PASS,
    db: 0
  })

  state = {
    db, client: factory(db)
  }

  return state.client
}

const client = function() {
  return state.client
}

const close = function() {
  if (!state.db) return
  state.db.disconnect()
}

const toPromise = function (err, result) {
  if (err) return Promise.reject(err)
  return Promise.resolve(result)
}

module.exports = {
  client, close, connect, toPromise
}
