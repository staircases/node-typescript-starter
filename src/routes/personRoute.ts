import express, { Request, Response } from 'express'

const router = express.Router()

const people = [
    { id: 1, name: 'Bob', age: 21 },
    { id: 2, name: 'John', age: 30 },
    { id: 3, name: 'Mike', age: 27 },
]

router.get('/', (req: Request, resp: Response) => {
    resp.status(200).json(people)
})

router.get('/:id', (req: Request, resp: Response) => {
    const person = people.find((p) => p.id === parseInt(req.params.id))
    if (person) {
        resp.status(200).json(person)
    } else {
        resp.status(404)
    }
})

router.post('/', (req: Request, resp: Response) => {
    const payload = { ...req.body }
    resp.status(201).json({ ...payload, status: 'created' })
})

export default router
