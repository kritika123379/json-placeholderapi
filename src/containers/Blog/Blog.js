import React, { Component } from 'react'
import FullPost from '../../components/FullPost/FullPost'
import Post from '../../components/Post/Post';
import NewPost from '../../components/NewPost/NewPost';
import axios from "axios";
 class Blog extends Component {
     state={
         posts:[],
         selectedPostId:null,
         errors:null
     }
     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response=>{
             console.log(response);
             const posts=response.data.slice(0,2);
             const updatedPosts=posts.map(post => {
                 return {
                     ...post,
                     author:"mymax"
                 }
             })
             this.setState({
                 posts:updatedPosts
                 
             })
         })
         .catch(error=>{
             console.log(error);
             this.setState({
                 errors:error
             })
         })
     }
     selectedPostHandler = (id) =>{
         console.log('clicked',id)
        this.setState({
            selectedPostId: id
        })
     }
    render() {
        let posts=<p>There something went wrong</p>
        if(!this.state.errors){
            posts=this.state.posts.map(post=>{
          
                return <Post  key={post.id}
    
                clicked={()  =>  this.selectedPostHandler(post.id)}
                 id={post.id}title={post.title} author={post.author}/>
            })
           
        }
         
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost  id={this.state.selectedPostId}/>   
                </section>
                <section>
                <NewPost/>
                </section>
            </div>
        )
    }
}

export default Blog
