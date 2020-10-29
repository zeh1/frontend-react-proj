import React from 'react'
import './LoginForm.css'
import {Redirect} from 'react-router-dom'

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    updateUsername = (e) => {
        this.setState({
            username: this.state.username
        })
    }

    updatePassword = (e) => {
        this.setState({
            password: this.state.password
        })
    }

    submitForm = (e) => {
        e.preventDefault()

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state),
            body: JSON.stringify({
                "username": "user10",
                "title": "TITLE",
                "body": "BODY",
                "password": "pw10",
                "email": "email10@x.com",
                "user_id": 1,
                "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXIxMCIsImpvaW5lZCI6IjIwMjAtMTAtMjEgMTk6Mjc6MTguMTY2MzI2KzAwOjAwIiwidXNlcl9pZCI6bnVsbCwiZXhwIjoxNjAzMzk0ODM4fQ.FxkGMQTxV9D6z48eHXX4xKKOgnsmktILjqYM57g16AI"
            })
        }

        fetch('http://127.0.0.1:8000/auth/login', options).then((res)=>{
            if (res.ok) {
                return res.json()
            }
        }).then((res)=>{
            localStorage.setItem('token', res.token)
            this.props.loginSuccessEvent()
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to='/'></Redirect>
        } else {
            return (
                <div className='loginform-container'>
                    <form onSubmit={this.submitForm}>
                        <p>Log In</p>
                        <input type='text' placeholder='Username' onInput={this.updateUsername}></input>
                        <input type='password' placeholder='Password' onInput={this.updatePassword}></input>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            )
        }
    }

}