import React, { Component } from 'react'
import  "./FullPost.css";
import axios from "axios";

class FullPost extends Component {
    state={
      loadedposts:[]  
    }

    componentDidUpdate(){
        if(this.props.id){
            if((!this.state.loadedposts) || (this.state.loadedposts && this.state.loadedposts.id !== this.props.id)){
                axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
            .then(response=>{
                console.log(response);
                this.setState({
                    loadedposts:response.data
                })
            })
            .catch(error=>{
                console.log(error);
            })
        }
         }
            
       
        
    }
    DeletePostHandler = () =>{
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
    }
    render() {
        console.log('FULLPOST',this.props.id)
        let post=<p  style={{textAlign:"center"}}>Please select a post!</p>
        if(this.props.id){
             post=<p  style={{textAlign:"center"}}>Loading....</p>   
        }
        if(this.state.loadedposts)
        {
          
           post = (
                <div className="FullPost">
                <h1>{this.state.loadedposts.title}</h1>
                <p>{this.state.loadedposts.body}</p>
                <div className="Edit">
                <button className="Delete" onClick={this.DeletePostHandler}>Delete</button>
                </div>
                    
                </div>
            )
        }
       
        return post
    }
}

export default FullPost
