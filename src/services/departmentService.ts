import { db } from '../database/models'
import Department from '../database/models/department'

class DepartmentService {
    private static instance: DepartmentService

    static getInstance(): DepartmentService {
        if (!DepartmentService.instance) {
            DepartmentService.instance = new DepartmentService()
        }
        return DepartmentService.instance
    }

    findAll = async () => {
        const departments: Department[] = await db.Department.findAll()
        return departments
    }

    findById = async (id: number) => {
        const dept: Department | null = await db.Department.findByPk(id)
        return dept
    }

    save = async (object: any) => {
        if (!object && Object.keys(object).length == 0) {
            throw new Error('Object must contain at least one property')
        }
        const department = await db.Department.create({ ...object })
        return department
    }

    update = async (id: number, object: any) => {
        if (!object && Object.keys(object).length == 0) {
            throw new Error(
                'Object to be updated must contain at least one property.'
            )
        }

        let existingDepartment = await this.findById(id)
        if (!existingDepartment) {
            throw new Error('Department not found')
        }

        await Department.update(
            { ...object },
            {
                where: { id },
            }
        )

        existingDepartment = await this.findById(id)
        return existingDepartment
    }

    deleteByPrimaryKey = async (id: number) => {
        const existingDepartment = await this.findById(id)
        if (!existingDepartment) {
            throw new Error('Department not found')
        }

        await existingDepartment.destroy()
    }
}

export default DepartmentService
