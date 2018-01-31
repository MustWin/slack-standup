### Running node-bot
```
make redis-start
# (cd node-bot && npm run start)
make node-start
```

### Testing events
Slack events are currently sent to https://standupbot.localtunnel.me [using local tunnel](https://github.com/localtunnel/localtunnel) forward these events to your local environment
[See if we're live](https://standupbot.localtunnel.me/hello)
If not, run
```
lt --port 3000 --subdomain standupbot
```
