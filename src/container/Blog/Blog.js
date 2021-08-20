import React, { Component } from 'react';
import { Route, NavLink,Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from '../../container/Blog/Posts/Posts';
// import NewPost from '../../container/Blog/NewPost/NewPost';
import asyncComponet from './hoc/asyncComponent';

const AsyncNewPost =  asyncComponet(() => {
    return import('../../container/Blog/NewPost/NewPost');
});

class Blog extends Component {
    state  ={
        auth: true,
    }
    render(){
        return(
            <div className='Blog'>
            <header>
                <nav>
                    <ul>
                        <li><NavLink 
                            to="/posts/" 
                            exact
                            activeClassName='MyActive-class'
                            activeStyle={{
                                color: 'fa923f',
                                textDecoration: 'underline'
                            }}
                            // activeClassName='active'
                            >Posts</NavLink></li>
                        <li><NavLink to={{
                            pathname:'/new-post',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}>New Post</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Switch>
                {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                <Route path="/posts" component={Posts} />
                <Route render={() => <h1>NOT FOUND</h1>} />
                // {/* <Route path="/posts" component={Posts} />
                // <Redirect from='/' to='/posts' /> */}
            </Switch>      
        </div>
        );
    }
}
export default Blog;