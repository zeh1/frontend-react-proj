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
            body: JSON.stringify(this.state)
        }

        fetch('http://127.0.0.1:8000/', options).then((res)=>{
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