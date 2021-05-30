import React,{useState} from 'react'

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
           <div className="register-form">
        <input
        onChange={handleUsernameInputChange}
        value={values.username}
        className="form-field"
        placeholder="Username"
        name="username" />
         <input
         onChange={handleEmailInputChange}
         value={values.email}
        className="form-field"
        placeholder="Email"
        name="username" />
         <input
         onChange={handlePasswordInputChange}
         values={values.password}
        className="form-field"
        placeholder="Password"
        name="Password" />
        <button
         className="form-field" type="submit">Login</button>
        

        </div>

       </div>



    )
}


export default Login
