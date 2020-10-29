import React from 'react'
import './SignupForm.css'
import {Redirect} from 'react-router-dom'

export default class SignupForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    updateEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    updateUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        const body = {
            password: this.state.password,
            email: this.state.email,
            username: this.state.username
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        fetch('http://127.0.0.1:8000/', options).then(res=>{
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject('failed')
            }
        }).then(res=>{
            localStorage.setItem('token', res.token)
            this.props.loginSuccessEvent()
        }).catch(err=>{
            alert(err)
        })
    }

    render() {

        if (this.props.isAuth) {
            return <Redirect to='/'></Redirect>
        } else {
            return (
                <form onSubmit={this.submitForm}>
                    <p>Sign Up</p>
                    <input type='text' placeholder='Email' onInput={this.updateEmail}></input>
                    <input type='text' placeholder='Username' onInput={this.updateUsername}></input>
                    <input type='password' placeholder='Password' onInput={this.updatePassword}></input>
                    <button type='submit'>Submit</button>
                </form>
            )
        }

    }

}