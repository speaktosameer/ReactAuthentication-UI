import React,{useState} from 'react'

function Signup() {
    const[values,setValues]=useState({
        fullname:"",
        username:"",
        email:"",
        password:"",
        confirmpassword:""

    });
    const handleFullnameInputChange =(e)=>{
        setValues({...values,fullname:e.target.value})
    }
    const handleUsernameInputChange =(e)=>{
        setValues({...values,username:e.target.value})
    }


        const handleEmailInputChange =(e)=>{
            setValues({...values,email:e.target.value})

    }
    const handlePasswordInputChange =(e)=>{
        setValues({...values,password:e.target.value})

}
const handleConfirmpasswordInputChange =(e)=>{
    setValues({...values,confirmpassword:e.target.value})

}



    return (
       <div className="form-container">
           <div className="register-form">
           <input
        onChange={handleFullnameInputChange}
        value={values.fullname}
        className="form-field"
        placeholder="Fullname"
        name="fullname"
        type="text" />
        <input
        onChange={handleUsernameInputChange}
        value={values.username}
        className="form-field"
        placeholder="Username"
        name="username"
        type="text" />
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
        type="password"/>
        <input
         onChange={handleConfirmpasswordInputChange}
         values={values.password}
        className="form-field"
        placeholder="Confirm Password"
        name="confirmpassword"
        type="password" />

        <button
         className="form-field" type="submit">Register</button>
        

        </div>

       </div>



    )
}


export default Signup
