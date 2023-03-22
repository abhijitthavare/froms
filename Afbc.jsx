import React from 'react'

const Afbc = () => {
  return (
    <div>
         <form action="">
            <label htmlFor="username">username</label>
            <br />
            <input type="text" id='username' />
            <br />
            <label htmlFor="password">password</label>
            <br />
            <input type="password" id='password'/>
            <br />
            <button onClick={(e)=>{
                e.preventDefault()
                let username=document.getElementById("username").value
                let password=document.getElementById("password").value
                console.log({username,password});
            }}>SUBMIT</button>
            </form>
    </div>
  )
}

export default Afbc