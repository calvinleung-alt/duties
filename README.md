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
Open `.env`
Modify
```
PG_USER=
PG_PASSWORD=
PG_DATABASE=duties
PG_HOST=127.0.0.1
PG_PORT=5432

PORT=8080
```

### Build Application
```
$ npm run build
```

### Start Application
```
$ npm run start
```