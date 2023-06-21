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
                    type: DataTypes.STRING(10),
                    primaryKey: true,
                },
                firstName: {
                    field: 'EFirstName',
                    type: DataTypes.STRING(20),
                },
                lastName: {
                    field: 'ELastName',
                    type: DataTypes.STRING(20),
                },
                address: {
                    field: 'Address',
                    type: DataTypes.STRING(30),
                },
                age: {
                    field: 'Age',
                    type: DataTypes.INTEGER({ length: 11 }),
                },
                joinDate: {
                    field: 'D_Join',
                    type: DataTypes.DATE,
                },
                department: {
                    field: 'Dept',
                    type: DataTypes.STRING(20),
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
