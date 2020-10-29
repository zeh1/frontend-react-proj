import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Navbar from './Navbar'
import Posts from './Posts'
import Replies from './Replies'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

export default class AuthChecker extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            token: null,
            isAuth: false
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('jwt')
        if (token) {
            this.setState({
                token: token,
                isAuth: true
            })
        }
    }

    loginSuccessEvent = () => {
        console.log('logged in')
        this.setState({
            token: localStorage.getItem('jwt'),
            isAuth: true
        })
    }

    render() {
        return (
            <React.Fragment>

                <Navbar isAuth={this.state.isAuth}></Navbar>

                <Switch>
                    <Route path='/login' render={ (routeProps) => <LoginForm {...routeProps} {...this.state} loginSuccessEvent={this.loginSuccessEvent}></LoginForm> }></Route>
                    <Route path='/signup' render={ (routeProps) => <SignupForm {...routeProps} {...this.state} loginSuccessEvent={this.loginSuccessEvent}></SignupForm> }></Route>
                    <Route path='/:postId' render={ (routeProps) => <Replies {...routeProps} {...this.state}></Replies> }></Route>
                    <Route path='/' render={ (routeProps) => <Posts {...routeProps} {...this.state}></Posts> }></Route>
                </Switch>

            </React.Fragment>
        )
    }

}