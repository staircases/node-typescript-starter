import { Request, Response, NextFunction } from 'express'

function simpleMiddleware(req: Request, resp: Response, next: NextFunction) {
    const authToken = req.headers['authorization']
    if (!authToken) {
        resp.status(401).json({ message: 'Invalid authorization token ' })
    } else {
        console.log('simple middleware', authToken)
        next()
        console.log('simple middleware end')
    }
}

export default simpleMiddleware
