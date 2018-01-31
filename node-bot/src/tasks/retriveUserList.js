require('dotenv').load();
const { WebClient } = require('@slack/client')
const token = process.env.SLACK_OAUTH_TOKEN;
const web = new WebClient(token);
const fs = require('fs');

const returnMembers = function(members){
  var str = '';
  members.forEach(function(m){
    str += m.id + "," + m.name + "\n";
  });
  return str;
}

web.users.list().then(function (result) {
  fs.writeFile('rawdata.json', returnMembers(result.members), function(err){
    if (err) { return console.log(err); }
    console.log('data recorded');
  });
}).catch(function (err) {
  console.log('big bug: ' + err);
});
