import express, { NextFunction, Request, Response } from 'express'
import QueryHandlingService from '../services/queryHandlingService'

const router = express.Router()

router.get('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const query = await QueryHandlingService.getInstance().findAll()
        resp.status(200).json(query)
    } catch (e) {
        next(e)
    }
})

router.get('/:id', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const existingQuery = await QueryHandlingService.getInstance().findById(
            req.params.id
        )
        if (existingQuery) {
            resp.status(200).json(existingQuery)
        } else {
            resp.status(404).json({
                message: `Query ${req.params.id} not found.`,
            })
        }
    } catch (e) {
        next(e)
    }
})

router.post('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const payload = { ...req.body }
        const newQuery = await QueryHandlingService.getInstance().save(payload)
        resp.status(201).json({ ...newQuery.dataValues })
    } catch (e) {
        next(e)
    }
})

router.put('/:id', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const queryId = req.params.id
        const data = await QueryHandlingService.getInstance().update(queryId, {
            ...req.body,
        })

        resp.status(200).json(data)
    } catch (e) {
        next(e)
    }
})

router.delete(
    '/:id',
    async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const queryId = req.params.id
            await QueryHandlingService.getInstance().deleteByPrimaryKey(queryId)

            resp.status(200).json({
                message: `Query ${queryId} successfully deleted.`,
            })
        } catch (e) {
            next(e)
        }
    }
)

export default router
