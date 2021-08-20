import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
    }
    componentDidMount(){
        console.log(this.props)
        this.loadData();
        
    }
    
    componentDidUpdate() {
        this.loadData();
    }

    loadData(){
        if(this.props.match.params.id){
            if( !this.state.loadedPost ||  this.state.loadedPost && this.state.loadedPost.id !== + this.props.match.params.id){
                axios.get('/posts/'+this.props.match.params.id)
                .then(response => {
                    // console.log(resposne)
                    this.setState({loadedPost: response.data});
                });
            }
           
        }
    }

    // IN console website, look network where we have request infinte time i.e. infinite loops because of
    // this.setState({loadedPost: response.data});
    // we are continously updating state


    deletePostHandler = () => {
        axios.delete('/posts'+this.props.match.params.id)
        .then(response => {
            console.log(response);
        });
    }
    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        //ERROR REMOVING
        if(this.props.match.params.id){
            post = <p style={{textAlign:'center'}}>Loading...</p>;
        }
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>l{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>  
            );
        }  
        //NULL TITLE ERROR KINA AYO VANE... componentDidUpdate() vanda aagi nai 
        //yo tala ko if wala statement run vayo jun ma {this.state.loadedPost.title}, loadedPost null nai hunxa

        // if(this.props.id){
        //     post = (
        //         <div className="FullPost">
        //             <h1>{this.state.loadedPost.title}</h1>
        //             <p>l{this.state.loadedPost.content}</p>
        //             <div className="Edit">
        //                 <button className="Delete">Delete</button>
        //             </div>
        //         </div>  
        //     );
        // }     
        return post;
    }
}

export default FullPost;