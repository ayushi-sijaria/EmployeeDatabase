import React from 'react'
import classes from './EmployeeRecord.module.css'

const EmployeeRecord = (props) => {
     var employee = props.emp
     var keys = Object.keys(props.emp)
     console.log(keys)
     return (
          <div className={classes.Employee}>
               {keys.map(key => <p><span>{key.toUpperCase()}:</span> 
                                   <span>{employee[key]}</span></p>)}
          </div>
     )
}

export default EmployeeRecord
