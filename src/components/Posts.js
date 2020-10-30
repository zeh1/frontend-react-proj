import React from 'react'

import Post from './Post'
import PostForm from './PostForm'

import './Posts.css'

export default class Posts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/posts').then(res=>{
            if (res.ok) {
                return res.json()
            }
        }).then(res=>{
            this.setState({
                posts: res.posts
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {

        let postList = null
        if (this.state.posts) {
            let list = this.state.posts
            postList = list.map((entry)=>{
                return <Post {...entry} key={JSON.stringify(entry)}></Post>
            })
        }

        if (this.props.isAuth) {
            return (
                <>
                    <PostForm></PostForm>
                    <ul className='postlist'>{postList}</ul>
                </>
            )
        } else {
            return (
                <ul className='postlist'>{postList}</ul>
            )
        }
    }

}