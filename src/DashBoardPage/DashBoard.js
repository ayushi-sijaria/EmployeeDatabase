import React, { useState } from 'react'
import EmployeeData from '../data/data'
import PaginationComponent from '../UI/Pagination/Pagination'
import classes from './DashBoard.module.css'
import EmployeeRecord from './EmployeeRecord/EmployeeRecord'

const DashBoard = () => {
     const [counter, setCounter] = useState(1)
     const maxCounter = 3
     const incCounterHandler = () =>
     {
          if(counter<maxCounter)
          setCounter(counter+1)
     }
     const decCounterHandler = () =>
     {
          if(counter>1)
          setCounter(counter-1)
     }
     const getPaginatedData = (data, counter) =>
     {
          return data.slice(counter*2-2,counter*2)
     }
     return (
          <div className={classes.List}>
               {getPaginatedData(EmployeeData, counter).map((e) => <EmployeeRecord key={e.id} emp={e}/>)}
               <PaginationComponent onPrev={decCounterHandler} 
                                    onNext={incCounterHandler}/>
          </div>
     )
}

export default DashBoard
