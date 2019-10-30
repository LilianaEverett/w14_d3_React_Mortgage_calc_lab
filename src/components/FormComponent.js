import React, { Component } from 'react'

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSalary: 0,
      secondSalary: 0,
      propertyValue: 0,
      totalSalary: 0
    };
    this.handleFirstSalaryChange = this.handleFirstSalaryChange.bind(this);
    this.handleSecondSalaryChange = this.handleSecondSalaryChange.bind(this);
    this.handlePropertyValueChange = this.handlePropertyValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstSalaryChange(event) {
    this.setState({ firstSalary: event.target.value });
  }

  handleSecondSalaryChange(event) {
    this.setState({ secondSalary: event.target.value });
  }

  handlePropertyValueChange(event) {
    this.setState({ propertyValue: event.target.value });
  }

  // sumOfSalaries() {
  //   const totalSalary = this.state.firstSalary + this.state.secondSalary;
  //   this.setState({totalSalary: totalSalary});
  // }

  handleSubmit(event) {
    event.preventDefault();
    const firstSalary = this.state.firstSalary.trim();
    const secondSalary = this.state.secondSalary.trim();
    const propertyValue = this.state.propertyValue.trim();
    if (!firstSalary || !secondSalary || !propertyValue) {
      return;
    }

    const totalSalary =
      parseInt(this.state.firstSalary) + parseInt(this.state.secondSalary);
    this.setState({totalSalary: totalSalary})

    let canAfford = false;
    console.log("total salary", totalSalary);
    if (totalSalary * 3 >= propertyValue) {
      canAfford = true;
    }
    this.props.onFormSubmit(canAfford);
    this.setState({ firstSalary: "", secondSalary: "", propertyValue: "" });
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="First Salary"
            onChange={this.handleFirstSalaryChange}
          ></input>
          <input
            type="text"
            placeholder="Second Salary"
            onChange={this.handleSecondSalaryChange}
          ></input>
          <input
            type="text"
            placeholder="property value"
            onChange={this.handlePropertyValueChange}
          ></input>
          <input type="submit" value="Calculate" />
        </form>
      </div>
    );
  }
}

export default FormComponent
