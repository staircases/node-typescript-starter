import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, resp: Response) => {
    const people = [
        { id: 1, name: 'Bob', age: 21 },
        { id: 2, name: 'John', age: 30 },
        { id: 3, name: 'Mike', age: 27 },
    ]
    resp.status(200).json(people)
})

router.get('/:id', (req: Request, resp: Response) => {
    resp.status(200).json({ id: 1, name: 'Bob', age: 21 })
})

router.post('/', (req: Request, resp: Response) => {
    const payload = { ...req.body }
    resp.status(201).json(payload)
})

export default router
