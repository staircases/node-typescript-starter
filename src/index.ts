import express, { application, Express, Request, Response } from 'express'

const app: Express = express()
const port = 5555

app.get('/', (re: Request, resp: Response) => {
    resp.send('Express + Typescript')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})
