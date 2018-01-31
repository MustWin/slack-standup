node-start:
	(cd node-bot && npm run start &) > node-bot.out

node-kill:
	(cd node-bot && npm run kill)

node-update: node-kill node-start

redis-start:
	(redis-server ./redis.conf &) > redis-bot.out

.PHONY: node-start
