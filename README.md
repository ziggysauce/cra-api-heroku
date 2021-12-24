# cra-api-heroku
Simple deployment with CRA and Express server API

Notes to self
- Running node12 (at time of writing)
  - This required manual CRA installation
  - Required running `npm install --legacy-peer-deps` in the client directory
- Heroku runs server app using `process.env.PORT`