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
}
