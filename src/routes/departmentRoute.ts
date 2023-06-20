import express, { NextFunction, Request, Response } from 'express'
import DepartmentService from '../services/departmentService'

const router = express.Router()

router.get('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const departments = await DepartmentService.getInstance().findAll()
        resp.status(200).json(departments)
    } catch (e) {
        next(e)
    }
})

router.get('/:id', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const existingDepartment =
            await DepartmentService.getInstance().findById(
                parseInt(req.params.id)
            )
        if (existingDepartment) {
            resp.status(200).json(existingDepartment)
        } else {
            resp.status(404).json({
                message: `Department ${req.params.id} not found.`,
            })
        }
    } catch (e) {
        next(e)
    }
})

router.post('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const payload = { ...req.body }
        const newDepartment = await DepartmentService.getInstance().save(
            payload
        )
        resp.status(201).json({ ...newDepartment.dataValues })
    } catch (e) {
        next(e)
    }
})

router.put('/:id', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const departmentId = parseInt(req.params.id)
        const data = await DepartmentService.getInstance().update(
            departmentId,
            {
                ...req.body,
            }
        )

        resp.status(200).json(data)
    } catch (e) {
        next(e)
    }
})

router.delete(
    '/:id',
    async (req: Request, resp: Response, next: NextFunction) => {
        try {
            const departmentId = parseInt(req.params.id)
            await DepartmentService.getInstance().deleteByPrimaryKey(
                departmentId
            )

            resp.status(200).json({
                message: `Department ${departmentId} successfully deleted.`,
            })
        } catch (e) {
            next(e)
        }
    }
)

export default router
