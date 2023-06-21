import { db } from '../database/models'
import QueryHandling from '../database/models/queryHandling'

class QueryHandlingService {
    private static instance: QueryHandlingService

    static getInstance(): QueryHandlingService {
        if (!QueryHandlingService.instance) {
            QueryHandlingService.instance = new QueryHandlingService()
        }
        return QueryHandlingService.instance
    }

    findAll = async () => {
        const query: QueryHandling[] = await db.QueryHandling.findAll()
        return query
    }

    findById = async (id: string) => {
        const query: QueryHandling | null = await db.QueryHandling.findByPk(id)
        return query
    }

    save = async (object: any) => {
        if (!object || Object.keys(object).length == 0) {
            throw new Error('Object must contain at least one property')
        }
        const query = await db.Department.create({ ...object })
        return query
    }

    update = async (id: string, object: any) => {
        if (!object && Object.keys(object).length == 0) {
            throw new Error(
                'Object to be updated must contain at least one property.'
            )
        }

        let existingQuery = await this.findById(id)
        if (!existingQuery) {
            throw new Error('Query not found')
        }

        await QueryHandling.update({ ...object }, { where: { id } })

        existingQuery = await this.findById(id)
        return existingQuery
    }

    deleteByPrimaryKey = async (id: string) => {
        const existingQuery = await this.findById(id)
        if (!existingQuery) {
            throw new Error('Query not found')
        }

        await existingQuery.destroy()
    }
}

export default QueryHandlingService
