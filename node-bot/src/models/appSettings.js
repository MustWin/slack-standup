const appSettings = function(client) {
  const MEMBER_KEY = 'appSetting:members'

  return {
    getMembers: function() {
      return client.smembers(MEMBER_KEY)
    },
    setMembers: function(members) {
      return client.sadd(MEMBER_KEY, members)
    }
  }
}

module.exports = {
  appSettings
}
