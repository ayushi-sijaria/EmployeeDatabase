import React, {useState} from 'react'
import classes from './Form.module.css'

const Form = (props) => {
     
     const [enteredUsername, setEnteredUsername] = useState('')
     const [enteredPassword, setEnteredPassword] = useState('')
     return (
          <form className={classes.Form} 
                onSubmit={(e) =>
                {
                    e.preventDefault()
                    props.authenticate(enteredUsername, enteredPassword)}}>
               <div>
                    <label>Username:  </label>
                    <input type='text' autoFocus
                         onChange={(e) => setEnteredUsername(e.target.value)}/>
               </div>
               <div>
                    <label>Password:  </label>
                    <input type='password'
                         onChange={(e) => setEnteredPassword(e.target.value)}/>
               </div>
               <div>
                    <button  type="submit">
                         Submit
                    </button>
                    <button>
                         Cancel
                    </button>
               </div>               
          </form>
     )
}

export default Form
