import React from 'react'

import './PostForm.css'

export default class PostForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    submitForm = (e) => {
        e.preventDefault()
        
        let body = {
            title: this.state.title,
            body: this.state.body,
            token: localStorage.getItem('token')
        }

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }

        console.log('submitted a post')
    }

    updateTitle = (e) => {
        if (e) {
            this.setState({
                title: e.target.value
            })
        }
    }

    updateBody = (e) => {
        if (e) {
            this.setState({
                body: e.target.value
            })
        }
    }

    render() {
        return (
            <div className='postform-container'>
                <form onSubmit={this.submitForm}>
                    <input type='text' placeholder='Title' onInput={this.updateTitle}></input>
                    <textarea placeholder='Body' onInput={this.updateBody}></textarea>
                    <button type="submit">Post</button>
                </form>
            </div>
        )
    }

}