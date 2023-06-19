import express, { application, Express, Request, Response } from 'express'

const all: Express = express()
const port = 5555

application.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})
