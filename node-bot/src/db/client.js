var Redis = require('ioredis');

var state = {
  db: null
};

const connect = function() {
  console.log(
    'host:port/password' +
    process.env.REDIS_HOST + ':' +
    process.env.REDIS_PORT + '/' +
    process.env.REDIS_PASS
  )
  state.db = new Redis({
    port: process.env.REDIS_PORT,          // Redis port, 6379
    host: process.env.REDIS_HOST,   // Redis host, 127.0.0.1
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: process.env.REDIS_PASS,
    db: 0
  })

  return state.db
}

const client = function() {
  return state.db
}

const toPromise = function (err, result) {
  if (err) return Promise.reject(err)
  return Promise.resolve(result)
}

module.exports = {
  client, connect, toPromise
}
