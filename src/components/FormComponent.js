import React, { Component } from 'react'

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
    this.handleDataChange = this.handleDataChange.bind(this);
  }
  
  handleDataChange(event){
    this.setState({data: event.target.value})
  }

  render() {
    return (
      <div>
        <form>
          <input
            className="data-input"
            type="text"
            value={this.state.data}
            onChange={this.handleDataChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default FormComponent
