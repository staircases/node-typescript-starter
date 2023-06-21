import { db } from '../database/models'
import Employee from '../database/models/employee'

class EmployeeService {
    private static instance: EmployeeService

    static getInstance(): EmployeeService {
        if (!EmployeeService.instance) {
            EmployeeService.instance = new EmployeeService()
        }
        return EmployeeService.instance
    }

    findAll = async () => {
        const employees: Employee[] = await db.Employee.findAll()
        return employees
    }

    findById = async (id: string) => {
        const employee: Employee | null = await db.Employee.findByPk(id)
        return employee
    }

    save = async (object: any) => {
        if (!object || Object.keys(object).length == 0) {
            throw new Error('Object must contain at least one property')
        }
        const employee = await db.Employee.create({ ...object })
        return employee
    }

    update = async (id: string, object: any) => {
        if (!object || Object.keys(object).length == 0) {
            throw new Error('Object must contain at least one property')
        }

        let existingEmployee = await this.findById(id)
        if (!existingEmployee) {
            throw new Error('Employee not found')
        }

        await Employee.update({ ...object }, { where: { empId: id } })
        existingEmployee = await this.findById(id)
        return existingEmployee
    }

    deleteByPrimaryKey = async (id: string) => {
        const existingEmployee = await this.findById(id)
        if (!existingEmployee) {
            throw new Error('Employee not found')
        }

        await existingEmployee.destroy()
    }
}

export default EmployeeService
