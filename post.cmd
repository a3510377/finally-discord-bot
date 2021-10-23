@echo off

npm run build:pro && cd dist && git init && git add . && git commit -m "deploy" && git push git@github.com:a3510377/finally-discord-bot.git master:gh-pages
