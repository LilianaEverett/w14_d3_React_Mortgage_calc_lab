import React, { Component } from 'react'
import ApprovalComponent from '../components/ApprovalComponent'
import FormComponent from '../components/FormComponent'

class MortgageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      approved: null
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(canAfford) {
    this.setState({ approved: canAfford });
  }

  render() {
    return (
      <div>

        <FormComponent onFormSubmit={this.handleFormSubmit}/>
        <ApprovalComponent approved={this.state.approved} />
      </div>
    )
  }
}

export default MortgageContainer
