import { Model, Sequelize, DataTypes } from 'sequelize'
import { QueryHandlingAttributes } from '../attributes'

class QueryHandling extends Model implements QueryHandlingAttributes {
    public qid!: string
    public subDate!: Date
    public custId!: string
    public empId!: string
    public resDate!: Date
    public status!: string
    public feedback!: number
    public queryText!: string
    public queryReponse!: string
    public readonly createdAt!: Date
    public readonly updated!: Date

    static initModel(sequelize: Sequelize): void {
        QueryHandling.init(
            {
                qid: {
                    field: 'QID',
                    type: DataTypes.STRING(10),
                    primaryKey: true,
                },
                subDate: {
                    field: 'Sub_Date',
                    type: DataTypes.DATE,
                },
                custId: {
                    field: 'Cust_ID',
                    type: DataTypes.STRING(10),
                },
                empId: {
                    field: 'EmpID',
                    type: DataTypes.STRING(10),
                },
                resDate: {
                    field: 'Res_Date',
                    type: DataTypes.DATE,
                },
                status: {
                    field: 'Status',
                    type: DataTypes.STRING(10),
                },
                feedback: {
                    field: 'Feedback',
                    type: DataTypes.INTEGER({ length: 11 }),
                },
                queryText: {
                    field: 'Query_Text',
                    type: DataTypes.STRING(250),
                },
                queryReponse: {
                    field: 'Query_Response',
                    type: DataTypes.STRING(150),
                },
            },
            {
                sequelize,
                tableName: 'QueryHandling',
            }
        )
    }
}
export default QueryHandling
