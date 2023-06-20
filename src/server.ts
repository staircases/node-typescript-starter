import express, { Express } from 'express'
import cors from 'cors'
import * as routes from './routes'

class Server {
    private app: Express

    constructor(app: Express) {
        if (!app) {
            throw new Error('Express instance is undefined.')
        }
        this.app = app
        this.app.set('trust proxy', true)
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    start(port: string) {
        this.app.listen(port, () => {
            console.log(
                `[server]: Server is listening at http://localhost:${port}`
            )
        })
    }
}

const createServer = (app: Express) => new Server(app)

export default createServer
