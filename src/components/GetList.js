//http get
import React, { Component } from 'react'
// import axios from 'axios'
class GetList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         error:''
      }
    }
    componentDidMount(){
        // axios.get('url')
        // .then(response=>{this.setState({posts:response.data})})
        // .catch(error=>{this.setState({error:'error retreiving data})})
    }
    
  render() {
    const {posts,error}=this.state
    return (
      <div>
        <h4>list of requests</h4> 
        {posts.length? posts.map(post=><div key={post.id}>{post.title}</div>):null}
        {error?<div>{error}</div>:null}
      </div>
    )
  }
}

export default GetList
