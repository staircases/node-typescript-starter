import express, { NextFunction, Request, Response } from 'express'
import DepartmentService from '../services/departmentService'
import EmployeeService from '../services/employeeService'

const router = express.Router()

router.get('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const employees = await EmployeeService.getInstance().findAll()
        resp.status(200).json(employees)
    } catch (e) {
        next(e)
    }
})

router.get('/:id', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const existingEmployee = await EmployeeService.getInstance().findById(
            req.params.id
        )
        if (existingEmployee) {
            resp.status(200).json(existingEmployee)
        } else {
            resp.status(404).json({
                message: `Employee ${req.params.id} not found.`,
            })
        }
    } catch (e) {
        next(e)
    }
})

router.post('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const payload = { ...req.body }
        const newEmployee = await EmployeeService.getInstance().save(payload)
        resp.status(201).json({ ...newEmployee.dataValues })
    } catch (e) {
        next(e)
    }
})

router.put('/:id', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const employeeId = req.params.id
        const data = await EmployeeService.getInstance().update(employeeId, {
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
            const employeeId = req.params.id
            await EmployeeService.getInstance().deleteByPrimaryKey(employeeId)

            resp.status(200).json({
                message: `Employee ${req.params.id} successfully deleted.`,
            })
        } catch (e) {
            next(e)
        }
    }
)

export default router
