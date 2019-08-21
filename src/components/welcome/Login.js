import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  submitForm = e => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.token = data.token
        this.props.setName(data.user)
        this.props.history.push("/paintings")
      }
      else {
        alert(data.errors[0])
      }
    })
  }

    render(){
      // console.log(this.props)
      return (
        <div className="login-signup-div">
          <form className="login-signup-form" onSubmit={this.submitForm}>
          <h4>Log In</h4>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}/>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange} />
          <input type="submit" />
          </form>
        </div>
    );
  }
}

export default Login;
