import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

  handleChange = (event) =>{
    console.log(event.target.value)
  }

  render(){
    return(
      <form >
        <label htmlFor="name"> 
          Name:
          <input type = 'text' placeholder="input name" />
        </label>
        <input type= 'submit' />
      </form>
    )
  }
}
 export default Form

