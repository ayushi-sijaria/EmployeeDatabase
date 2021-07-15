import React from 'react'
import classes from './LoginPage.module.css'

const LoginPage = () => {
     return (
          <form className={classes.Form}>
               <div>
                    <label>Username:  </label>
                    <input type='text'/>
               </div>
               <div>
                    <label>Password:  </label>
                    <input type='password'/>
               </div>
               <div>
                    <button  type="submit">
                         Submit
                    </button>
                    <button  type="submit">
                         Cancel
                    </button>
               </div>               
          </form>
     )
}

export default LoginPage
