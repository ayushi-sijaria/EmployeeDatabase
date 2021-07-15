import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import classes from './LoginPage.module.css'
import { useHistory } from 'react-router-dom'
import Form from '../UI/Form/Form'

const LoginPage = () => {
     const history = useHistory()
     const username = useSelector(state => state.username)
     const password = useSelector(state => state.password)
     const [error, seterror] = useState(false)
     const authenticateHandler = (enteredUsername, enteredPassword) => {
          if(enteredUsername===username && enteredPassword===password)
          {
               history.replace('/employees')
          }
          else 
          {
               seterror(true)
          }        
     }
     return (
          <div>
               <Form authenticate={authenticateHandler}/>
               {error && <p className={classes.Error}>Wrong Username or Password.<br/>Please try again !!!</p>}
          </div>

               
     )
}

export default LoginPage
