import React from 'react'
import Add from "../img/addAvatar.png"
const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Login</span>
        <form >

          <input type="email" placeholder="email"/>
          <input type="passowrd" placeholder="password"/>
          
          <button>Login</button>

        </form>
        <p>Don't have Account ? Register</p>
      </div>

    </div>
  )
}

export default Login