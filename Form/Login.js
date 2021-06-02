import React,{useState} from 'react'
import './Form.css';

function Login() {
    const[values,setValues]=useState({
        username:"",
        email:"",
        password:""

    });
    const handleUsernameInputChange =(e)=>{
        setValues({...values,username:e.target.value})
    }


        const handleEmailInputChange =(e)=>{
            setValues({...values,email:e.target.value})

    }
    const handlePasswordInputChange =(e)=>{
        setValues({...values,password:e.target.value})

}



    return (
       <div className="form-container">
           <form className="register-form">
        <input
        onChange={handleUsernameInputChange}
        value={values.username}
        className="form-field"
        placeholder="Username"
        name="username"
        type="text"
        />
         <input
         onChange={handleEmailInputChange}
         value={values.email}
        className="form-field"
        placeholder="Email"
        name="username"
        type="email" />
         <input
         onChange={handlePasswordInputChange}
         values={values.password}
        className="form-field"
        placeholder="Password"
        name="Password"
        type="password" />
         <button
         className="form-field" type="submit">Login</button>

        </form>

        </div>

       
       



    )
}


export default Login
