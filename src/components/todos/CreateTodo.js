import React, { Component } from 'react'
import { connect } from "react-redux"

class CreateTodo extends Component {
  constructor(){
    super()
    this.state = {
      text: ""
    }
  }
  render() {
    return(
      <div>
        <form onSubmit ={this.handleSubmit}>
           <p>
             <label>add todo</label>
             <input type="text" />
           </p>
           <input value={this.state.text} onChange = {this.handleChange} type="submit" />
         </form>
        </div>
    )
  }
  handleChange = (e) =>{
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit = event => {
  event.preventDefault();
  this.props.addTodo(this.state)
}
}
const mapDispatchToProps = dispatch =>{
  return {
    addTodo: (formData) => dispatch({type: "ADD_TODO", payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
