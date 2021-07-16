import React from 'react'
import classes from './EmployeeRecord.module.css'
import employeeImage from '../../Assets/employee.jpg'

const EmployeeRecord = (props) => {
     var employee = props.emp
     var keys = Object.keys(props.emp)
     console.log(keys)
     return (
          <div className={classes.Employee}>
               <div className={classes.Data}>
                    {keys.map(key => <p><span>{key.toUpperCase()}:</span> 
                                        <span>{employee[key]}</span></p>)}
               </div>
               <div>
                    <img src={employeeImage} alt='Employee Image'/>
               </div>
          </div>
     )
}

export default EmployeeRecord
