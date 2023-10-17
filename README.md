# Duties

## Prerequisites
- docker
- docker compose

## Start Application
```
$ docker compose up
```

Open browser and check `localhost:8080`

## Local Setup
### Prerequisites
- postgres:15
- node:18

### Setup Environment Variables
Open `.env` and Modify
```
PG_USER=
PG_PASSWORD=
PG_DATABASE=duties
PG_HOST=127.0.0.1
PG_PORT=5432

PORT=8080
```

### Build Application
#### Command
```
$ npm run build
```
#### Verify
- Check if file `main.js` exists in `build` folder
- Check if file `bundle.js` exists in `public` folder

### Start Application
#### Command
```
$ npm run start
```

#### Alias
```
$ node ./build/main.js
```