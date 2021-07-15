import React from 'react'
import EmployeeData from '../data/data'
import classes from './DashBoard.module.css'
import EmployeeRecord from './EmployeeRecord/EmployeeRecord'

const DashBoard = () => {
     return (
          <div className={classes.List}>
               {EmployeeData.map((e) => <EmployeeRecord key={e.id} 
                                                        id={e.id}
                                                        name={e.name}
                                                        age={e.age}
                                                        gender={e.gender}
                                                        email={e.email}
                                                        phoneNo={e.phoneNo}/>)}
          </div>
     )
}

export default DashBoard
