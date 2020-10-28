import React from 'react'

import Post from './Post'
import PostForm from './PostForm'

export default class Posts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        console.log('mounted')
        fetch('http://127.0.0.1:8000/').then(res=>{
            if (res.ok) {
                console.log('receieved')
                return res.json()
            }
        }).then(res=>{
            this.setState({
                posts: res
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {

        let list = null
        let postList = null
        if (list) {
            list = this.state.posts
        }
        //

        const list = this.state.posts

        console.log('breakpoint')
        console.log(list)

        const postList = list.map((entry)=>{
            return <Post {...entry}></Post>
        })

        if (this.props.isAuth) {
            return (
                <>
                    <PostForm></PostForm>
                    {postList}
                </>
            )
        } else {
            return (
                {postList}
            )
        }
    }

}