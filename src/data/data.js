import loginData from './login.json'
import employeeData from './dashboardData.json'

const employees = []
{
     for (var i=0; i<employeeData.user.length; i++)
     {
          var obj = 
          {
               id: employeeData.user[i].id,
               name: employeeData.user[i].name,
               age: employeeData.user[i].age,
               gender: employeeData.user[i].gender,
               email: employeeData.user[i].email,
               phoneNo: employeeData.user[i].phoneNo
          }
          employees.push(obj)
     }
}
export const username = loginData.username
export const password = loginData.password
export default employees
