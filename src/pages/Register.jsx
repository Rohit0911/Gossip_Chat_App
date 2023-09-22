import React from 'react'
import Add from "../img/addAvatar.png"
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Register</span>
        <form >
          <input type="text" placeholder="display name"/>
          <input type="email" placeholder="email"/>
          <input type="passowrd" placeholder="password"/>
          <input style={{display:"none"}} type="file" id="file"/>
          <label htmlFor="file">
            <img src={Add} alt="" srcset="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>

        </form>
        <p>Do you have Account ? Login</p>
      </div>

    </div>
  )
}

export default Register