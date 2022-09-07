import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      username: "nijimasin",
      email: "alwinsenior@outlook.com",
      topic: "angular"
    };

    const emailHandler = (e) => {
      this.setState({ email: e.target.value });
    };
    const usernameHandler = (e) => {
      this.setState({ username: e.target.value });
    };
    const topicHandler = (e) => {
      this.setState({ topic: e.target.value });
    };
    const submitHandler=(e)=>{
        alert(`${this.state.username}${this.state.email}${this.state.topic}`)
        e.preventDefault()
    }
  }

  render() {
    return (
      <form  onSubmit={this.submitHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.usernameHandler}
          ></input>
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.emailhandler}
          ></input>
          <label>Topic</label>
          <select
            value={this.state.topic}
            onChange={this.topicHandler}>
            <option>react</option>
            <option>vue</option>
            <option>angular</option>
            <option>firebase</option>
          </select>
          <button type="submit">submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
