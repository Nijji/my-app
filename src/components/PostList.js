import React, { Component } from "react";
//import axios from 'axios'

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Id: "",
      title: "",
      body: "",
    };
  }
  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitPost(e) {
    e.preventDefault()
    // axios.post(url,this.state)
    // .then(response=>{console.log(response);})
    // .catch()
  }
  render() {
    const { Id, title, body } = this.state;
    return (
      <div>
        <h3>list of posts</h3>
        <form onSubmit={this.submitPost}>
          <button type="submit">submit post</button>
          <input
            placeholder="Id"
            value={Id}
            onChange={this.changeHandler}
          ></input>
          <input
            placeholder="title"
            value={title}
            onChange={this.changeHandler}
          ></input>
          <input
            placeholder="body"
            value={body}
            onChange={this.changeHandler}
          ></input>
        </form>
      </div>
    );
  }
}

export default PostList;
