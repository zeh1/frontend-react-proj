import React from 'react'
import './AuthChecker.css'

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

    componentDidUpdate() {
        
    }

}