import React from 'react'
import classes from './EmployeeRecord.module.css'

const EmployeeRecord = (props) => {
     return (
          <div className={classes.Employee}>
               <p>Employee id: {props.id}</p>
               <p>Name:{props.name}</p>
               <p>Age: {props.age}</p>
               <p>Gender: {props.gender}</p>
               <p>Phone No.:{props.phoneNo}</p>
          </div>
     )
}

export default EmployeeRecord
