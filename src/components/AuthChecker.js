import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Posts from './components/Posts'
import Replies from './components/Replies'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

export default class AuthChecker extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            token: null,
            isAuth: false
        }
    }

    componentDidMount() {
        token = localStorage.getItem('jwt')
        if (token) {
            this.setState({
                token: token,
                isAuth: true
            })
        }
    }

    loginSuccessEvent() {
        this.setState({
            token: localStorage.getItem('jwt'),
            isAuth: true
        })
    }

    render() {
        return (
            <React.Fragment>

                <Navbar></Navbar>

                <Switch>
                    <Route path='/' render={ (routeProps) => <Posts {...routeProps} {...this.state}></Posts> }></Route>
                    <Route path='/:postId' render={ (routeProps) => <Replies {...routeProps} {...this.state}></Replies> }></Route>
                    <Route path='/login' render={ (routeProps) => <LoginForm {...routeProps} {...this.state} loginSuccessEvent={this.loginSuccessEvent}></LoginForm> }></Route>
                    <Route path='/signup' render={ (routeProps) => <SignupForm {...routeProps} {...this.state} loginSuccessEvent={this.loginSuccessEvent}></SignupForm> }></Route>
                </Switch>

                <Footer></Footer>

            </React.Fragment>
        )
    }

}