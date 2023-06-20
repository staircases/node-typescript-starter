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
        const department = await Department.create({ ...object })
        return department
    }
}

export default DepartmentService
