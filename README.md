# Sendight

Sendight is a Peer-to-Peer file sharing platform built on the top of webRTC.

## How to setup sendight-backend

- Clone the repository using `git clone https://github.com/thephilomaths/sendight-backend`
- Install all the dependencies using `yarn install`
- Migrate and seed the database using the following commands:
    ```
    cd project_root/src/db
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
    ```
- Serve the backend using `yarn start`

## Tech Stack

- Node.js
- Sequelize
- Socket.io
