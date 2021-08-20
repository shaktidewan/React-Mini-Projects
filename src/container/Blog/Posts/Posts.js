import React,{ Component } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
// import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import FullPost from '../../Blog/FullPost/FullPost';

class Posts extends Component {
    state = { 
        posts: [],
        // selectedPostId: null,
        // error: false,
    }
    componentDidMount() {
        console.log(this.props)
        axios.get('/posts')
        .then(response => {
            //transform data [from 1 to 4]
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(
                post => {
                    return{
                        ...post,
                        author: 'Max'
                }
                }
            )
            this.setState({posts: updatedPosts})
            // console.log(response);
        })
        .catch(error => {
            console.log(error)
            // this.setState({error: true})
        });
    }    
    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id});
        //HISTORY OBJECT IN CONSOLE, like goBack and push method. push will navigate to new page
        this.props.history.push({pathname: '/posts/' +id});
        // OR 
        // this.props.history.push('/posts/' + id);
    }


    render(){
        let posts = <p>Something wrong</p>
        if(!this.state.error){
            posts = this.state.posts.map(
                post => {
                    return (
                        // <Link to={'/posts/'+post.id}  key={post.id} >
                            <Post 
                            key={post.id}
                            clicked={() => this.postSelectedHandler(post.id)} 
                            title={post.title} 
                            author={post.author}/>
                        // </Link>
                    );
                }
            );
        }
        return(
            <div>
            <section className="Posts">
                {posts}
            </section>
            {/* <Route path="/posts/:id" exact component={FullPost} /> */}
            {/* GETTING DYnamic path  */}
            <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
            
        )
    }
}

export default Posts;