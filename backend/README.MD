
## TEAM-275 API

The backend uses Nodejs, and MongoDB so you need to have those installed locally.

### Running the API

`$ npm run start` - running with nodemon (dev-mode)

`$ npm run build` - transcompiler with babel from ES6

`$ npm run serve` - runs the transcompiled app version from "dist"

`$ npm run lint` - runs linting

`$ npm run format` - runs prettier format

The API is served on port :3000

### Database connection string

If you don't have a local config of the database, change the uri on "util/database.ts" string to point to remote mongodb server.


### API Documentation

We used swagger docs, the index page of the API

### http://localhost:3000
