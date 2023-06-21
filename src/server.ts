import express, { Express } from 'express'
import cors from 'cors'
import * as routes from './routes'
import morganMiddleware from './middlewares/morganMiddleware'
import logger from './logging/logger'
import errorHandler from './middlewares/errorMiddleware'

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
        this.app.use(morganMiddleware.config)
    }

    errorHandler() {
        this.app.use(errorHandler)
        return this
    }

    routes(): Server {
        this.app.use('/__gtg', routes.gtgRoute)
        this.app.use('/departments', routes.departmentRoute)
        this.app.use('/products', routes.productRoute)
        this.app.use('/employees', routes.employeeRoute)
        return this
    }

    start(port: string) {
        this.app.listen(port, () => {
            logger.info(
                `[server]: Server is listening at http://localhost:${port}`
            )
        })
    }
}

const createServer = (app: Express) => new Server(app)

export default createServer
