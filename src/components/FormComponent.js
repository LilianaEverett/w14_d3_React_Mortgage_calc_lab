import React, { Component } from 'react'

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: "",
      propertyValue: ""
    };
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handlePropertyValueChange = this.handlePropertyValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSalaryChange(event) {
    this.setState({ salary: event.target.value });
  }

  handlePropertyValueChange(event) {
    this.setState({ propertyValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const salary = this.state.salary.trim();
    const propertyValue = this.state.propertyValue.trim();
    if (!salary || !propertyValue) {
      return;
    };
    console.log("hello");

    let canAfford = false;
    if (salary * 3 > propertyValue) {
      canAfford = true;
    };
    console.log("can afford", canAfford);
    this.props.onFormSubmit( canAfford );
    this.setState({ salary: "", propertyValue: "" });
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="salary"
            value={this.state.salary}
            onChange={this.handleSalaryChange}
          ></input>
          <input
            type="text"
            placeholder="property value"
            value={this.state.propertyValue}
            onChange={this.handlePropertyValueChange}
          ></input>
          <input type="submit" value="Calculate" />
        </form>
      </div>
    );
  }
}

export default FormComponent
