import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: { value: '', valid: false },
    email: { value: '', valid: false },
    dob: { min: '1900-01-01', max: '2020-12-21', value: '2020-01-01', valid: false },
    colour: { value: '', valid: false },
    salary: { min: 20000, max: 100000, value: 33000, valid: false },
    // name: { value: 'Radu', valid: true },
    // email: { value: 'radu.alex.nicolau@gmail.com', valid: true },
    // dob: { min: '1900-01-01', max: '2020-12-21', value: '1982-04-20', valid: true },
    // colour: { value: 'purple', valid: true },
    // salary: { min: 20000, max: 100000, value: 85000, valid: true },
  };

  componentDidMount() {
    console.clear();
  }

  handleChangeName = (event) => {
    let name = { value: event.target.value, valid: event.target.value.length > 1 };
    this.setState({ name });
  };

  handleChangeEmail = (event) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = { value: event.target.value, valid: re.test(String(event.target.value).toLowerCase()) };
    this.setState({ email });
  };

  handleChangeDob = (event) => {
    let dob = {
      min: this.state.dob.min,
      max: this.state.dob.max,
      value: event.target.value,
      valid: Date.parse(event.target.value) < Date.parse('2000-01-01'),
    };
    this.setState({ dob });
  };

  handleChangeColour = (event) => {
    let colour = { value: event.target.value, valid: true };
    this.setState({ colour });
  };

  handleChangeSalary = (event) => {
    let salary = {
      min: this.state.salary.min,
      max: this.state.salary.max,
      value: parseInt(event.target.value),
      valid: parseInt(event.target.value) >= 80000,
    };
    this.setState({ salary });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.clear();
    let message = Object.fromEntries(Object.entries(this.state).map((entry) => [entry[0], entry[1].value || entry[1]]));
    console.table(message);
    alert('SUBMITTED:' + Object.entries(message).map((entry) => '\n' + entry[0] + ': ' + entry[1]));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={this.state.name.valid ? 'valid' : ''}>
          Name:
          <input type='text' name='name' placeholder='full name' value={this.state.name.value} onChange={this.handleChangeName} />
        </label>

        <label className={this.state.email.valid ? 'valid' : ''}>
          Email:
          <input type='text' name='email' placeholder='your email' value={this.state.email.value} onChange={this.handleChangeEmail} />
        </label>

        <label className={this.state.dob.valid ? 'valid' : ''}>
          Date of birth:
          <input
            type='date'
            name='dob'
            value={this.state.dob.value}
            min={this.state.dob.min}
            max={this.state.dob.max}
            onChange={this.handleChangeDob}
          />
        </label>

        <label className={this.state.colour.valid ? 'valid' : ''}>
          Favourite colour:
          <select name='colour' className={this.state.colour.value} onChange={this.handleChangeColour}>
            <option disabled selected value>
              -- pick a colour --
            </option>
            <option value='yellow' className='yellow'></option>
            <option value='orange' className='orange'></option>
            <option value='pink' className='pink'></option>
            <option value='purple' className='purple'></option>
          </select>
        </label>

        <label className={this.state.salary.valid ? 'valid' : ''}>
          Salary:
          <input
            type='range'
            name='salary'
            value={this.state.salary.value}
            min={this.state.salary.min}
            max={this.state.salary.max}
            onChange={this.handleChangeSalary}
          />
          {this.state.salary.value}
        </label>

        <input
          disabled={
            Object.entries(this.state)
              .map((entry) => entry[1].valid)
              .filter((valid) => valid).length !== Object.entries(this.state).length
          }
          type='submit'
          value='SUBMIT'
        />
      </form>
    );
  }
}

export default Form;
