import React from 'react'
import {Switch, Route} from 'react-router-dom'



export default class AuthChecker extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            token: null
        }
    }

    componentDidMount() {
        this.setState({
            token: localStorage.getItem('jwt')
        })
    }

    loginSuccessEvent() {
        this.setState({
            token: localStorage.getItem('jwt')
        })
    }

    render() {
        return (
            <React.Fragment>

                <Navbar></Navbar>

                <Switch>
                    <Route></Route>
                    <Route></Route>
                    <Route></Route>
                    <Route></Route>
                </Switch>

                <Footer></Footer>

            </React.Fragment>
        )
    }

}