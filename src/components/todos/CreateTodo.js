import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }

  }

  handleOnChange = (event) => {
    let todo = event.target.value

    this.setState({
      text: todo
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();

    this.props.dispatch({type: "ADD_TODO", payload: this.state})
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <label>add todo</label>
            <input
              onChange={this.handleOnChange}
              type="text"
              value={this.state.text}/>
          </p>
          <input
            type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect()(CreateTodo);
