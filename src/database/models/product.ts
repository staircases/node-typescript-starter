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
                    type: DataTypes.STRING(7),
                    primaryKey: true,
                },
                prodName: {
                    field: 'ProdName',
                    type: DataTypes.STRING(30),
                },
                baseCost: {
                    field: 'Base_Cost',
                    type: DataTypes.DOUBLE,
                },
            },
            {
                sequelize,
                tableName: 'Product',
            }
        )
    }
}

export default Product
