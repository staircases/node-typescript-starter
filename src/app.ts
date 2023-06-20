import express, { Express } from 'express'
import environment from './environment'
import createServer from './server'
import SequelizeConnection from './database/configuration'
;(async () => {
    await SequelizeConnection.connect()
})()

const app: Express = express()
const appPort = environment.APP_PORT

createServer(app).routes().errorHandler().start(appPort)

process.on('SIGINT', () => {
    SequelizeConnection.close()
    process.exit()
})
