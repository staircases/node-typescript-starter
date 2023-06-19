import express, { application, Express, Request, Response } from 'express'
import environment from './environment'

const app: Express = express()
const port = environment.APP_PORT
const appEnvironment = environment.APP_ENVIRONMENT

app.get('/api/version', (re: Request, resp: Response) => {
    const jsonResponse = {
        message: 'this is a json response',
        environment: appEnvironment,
    }
    resp.setHeader('Content-Type', 'application/json')
    resp.writeHead(200)
    resp.end(JSON.stringify(jsonResponse))
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})
