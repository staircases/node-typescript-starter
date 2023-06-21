import { Model, Sequelize, DataTypes } from 'sequelize'
import { EmployeeAttributes } from '../attributes/employeeAttributes'

class Employee extends Model implements EmployeeAttributes {
    public empId!: string
    public firstName!: string
    public lastName!: string
    public address!: string
    public age!: number
    public joinDate!: Date
    public department!: string
    public salary!: number

    static initModel(sequelize: Sequelize): void {
        Employee.init(
            {
                empId: {
                    field: 'EmpID',
                    type: DataTypes.STRING,
                    primaryKey: true,
                },
                firstname: {
                    field: 'EFirstName',
                    type: DataTypes.STRING,
                },
                lastname: {
                    field: 'ELastName',
                    type: DataTypes.STRING,
                },
                address: {
                    field: 'Address',
                    type: DataTypes.STRING,
                },
                age: {
                    field: 'Age',
                    type: DataTypes.INTEGER,
                },
                joinDate: {
                    field: 'D_Join',
                    type: DataTypes.DATE,
                },
                department: {
                    field: 'Dept',
                    type: DataTypes.DATE,
                },
                salary: {
                    field: 'Salary',
                    type: DataTypes.DOUBLE,
                },
            },
            {
                sequelize,
                tableName: 'Employees',
            }
        )
    }
}

export default Employee
