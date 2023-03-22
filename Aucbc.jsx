import React, { Component,createRef } from 'react'

export default class Aucbc extends Component {
    constructor()
      {
        super()
        this.useRef=createRef()
        this.passRef=createRef()
      }
  render() {
    return (
      
        
    <div>
         <form action="" >
            <label htmlFor="username">username</label>
            <br />
            <input type="text" id='username' ref={this.useRef} />
            <br />
            <label htmlFor="password">password</label>
            <br />
            <input type="password" id='password' ref={this.passRef}/>
            <br />
            <button onClick={(e)=>{
                e.preventDefault()
                let username=this.useRef.current.value
                let password=this.passRef.current.value
                console.log({username,password});
            }}>SUBMIT</button>
            </form>
      </div>
    )
  }
}
