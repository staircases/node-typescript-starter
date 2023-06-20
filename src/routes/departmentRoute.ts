import express, { Request, Response } from 'express'
import DepartmentService from '../services/departmentService'

const router = express.Router()

router.get('/', async (req: Request, resp: Response, next) => {
    try {
        const departments = await DepartmentService.getInstance().findAll()
        resp.status(200).json(departments)
    } catch (e) {
        next(e)
    }
})

export default router
