import { Request, Response, NextFunction } from 'express'

function simpleMiddleware(req: Request, resp: Response, next: NextFunction) {
    const urlPath = req.url
    const authToken = req.headers['authorization']
    if (urlPath.startsWith('/api') && !authToken) {
        resp.status(401).json({ message: 'Invalid authorization token ' })
        return
    }
    next()
}

export default simpleMiddleware
