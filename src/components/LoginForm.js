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

                        <svg width="45px" height="45px" viewBox="0 0 16 16" class="bi bi-arrow-right-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/>
                        </svg>

                    </form>
                </div>
            )
        }
    }

}