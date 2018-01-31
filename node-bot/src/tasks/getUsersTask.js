require('dotenv').load();
const { WebClient } = require('@slack/client');
const db = require('../db/client')

// An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
const token = process.env.SLACK_OAUTH_TOKEN;
const web = new WebClient(token);

db.connect()

const updateAppSettings = function(members) {
  const redis = db.client()

  return redis.appSettings.setMembers(members)
}

const readAppSettings = function() {
  const redis = db.client()

  return redis.appSettings.getMembers().then(function(result) {
    console.log('added members: ' + JSON.stringify(result))
    return Promise.resolve(result)
  }).catch(function(err) {
    console.log('adding members failed: ' + err)
  })
}

updateAppSettings(['FAKEID']).then(readAppSettings).then(db.close)


/*
const readMemberIds = function(groupResult) {
  return (groupResult.members || []).map(function(user) {
    return user.id
  })
}

web.usergroups.get(process.env.STANDUP_GROUP_ID, function(err, result) {
  if (err) {
    console.log('err reading group: ' + err)
    return
  }

  const memberIds = readMemberIds(result)
  writeToRedis(memberIds)
})
*/
