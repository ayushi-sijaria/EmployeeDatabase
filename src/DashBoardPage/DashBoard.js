import React, { Fragment, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import EmployeeData from '../data/data'
import PaginationComponent from '../UI/Pagination/Pagination'
import classes from './DashBoard.module.css'
import EmployeeRecord from './EmployeeRecord/EmployeeRecord'


const DashBoard = () => {
     const history = useHistory()
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
     const logoutHandler = () =>
     {
          localStorage.setItem('authenticated', 'false')
          history.replace('/')
     }
     if(localStorage.getItem('authenticated')==='false')
     {
          alert('You have to login first !')
          history.replace('/')
     }
     
     return (
          <Fragment>
          <Button variant="danger" className={classes.Button}
                  onClick={logoutHandler}
                  >Logout</Button>
          <div className={classes.List}>
               {getPaginatedData(EmployeeData, counter).map((e) => <EmployeeRecord key={e.id} emp={e}/>)}
               <PaginationComponent onPrev={decCounterHandler} 
                                    onNext={incCounterHandler}/>
          </div>
          </Fragment>
     )
}

export default DashBoard
