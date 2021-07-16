import React, {useState} from 'react'
import classes from './Form.module.css'

const Form = (props) => {
     
     const [enteredUsername, setEnteredUsername] = useState('')
     const [enteredPassword, setEnteredPassword] = useState('')
     const cancelHandler = (event) =>
     {
          event.preventDefault()
          setEnteredUsername('')
          setEnteredPassword('')
     }
     return (
          <form className={classes.Form} 
                onSubmit={(e) =>
                {
                    e.preventDefault()
                    props.authenticate(enteredUsername, enteredPassword)}}>
               <div>
                    <label>Username:  </label>
                    <input type='text' autoFocus
                         onChange={(e) => setEnteredUsername(e.target.value)}
                         value={enteredUsername}/>
               </div>
               <div>
                    <label>Password:  </label>
                    <input type='password'
                         onChange={(e) => setEnteredPassword(e.target.value)}
                         value={enteredPassword}/>
               </div>
               <div>
                    <button  type="submit">
                         Submit
                    </button>
                    <button onClick={cancelHandler}>
                         Clear
                    </button>
               </div>               
          </form>
     )
}

export default Form
