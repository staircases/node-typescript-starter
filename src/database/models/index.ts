import SequelizeConnection from '../configuration'
import Department from './department'
import Employee from './employee'
import Product from './product'
import QueryHandling from './queryHandling'

const sequelize = SequelizeConnection.getInstance()

Department.initModel(sequelize)
Product.initModel(sequelize)
Employee.initModel(sequelize)
QueryHandling.initModel(sequelize)

export const db = {
    sequelize,
    Department,
    Product,
    Employee,
    QueryHandling,
}
