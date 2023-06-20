import { Model, Sequelize, DataTypes } from 'sequelize'
import { ProductAttributes } from '../attributes'

class Product extends Model implements ProductAttributes {
    prodId!: string
    prodName!: string
    baseCost!: number

    static initModel(sequelize: Sequelize): void {
        Product.init(
            {
                prodId: {
                    field: 'ProdID',
                    type: DataTypes.STRING,
                    primaryKey: true,
                },
                prodName: {
                    field: 'ProdName',
                    type: DataTypes.STRING,
                },
                baseCost: {
                    field: 'Base_Cost',
                    type: DataTypes.DOUBLE,
                },
            },
            {
                sequelize,
                tableName: 'product',
            }
        )
    }
}

export default Product
