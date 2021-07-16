import React from 'react'
import classes from './EmployeeRecord.module.css'

const EmployeeRecord = (props) => {
     return (
          <div className={classes.Employee}>
               <p><span>Employee id:</span>
               {props.id}</p>
               <p><span>Name:</span>{props.name}</p>
               <p><span>Age:</span> {props.age}</p>
               <p><span>Gender:</span> {props.gender}</p>
               <p><span>Phone No.:</span>{props.phoneNo}</p>
          </div>
     )
}

export default EmployeeRecord
