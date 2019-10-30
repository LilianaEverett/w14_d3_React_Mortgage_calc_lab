import React, { Component } from 'react'
import ApprovalComponent from '../components/ApprovalComponent'
import CalculatorButton from '../components/CalculatorButton'
import FormComponent from '../components/FormComponent'

class MortgageContainer extends Component {


  render() {
    return (
      <div>
        <ApprovalComponent/>
        <FormComponent />
        <CalculatorButton/>
      </div>
    )
  }
}

export default MortgageContainer
