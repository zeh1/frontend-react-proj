import React from 'react';
import './example.css';




export default class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            perma: 'perma'
        }
    }

    componentDidMount() {
        console.log(`this.state.${this.state.perma}`)
        console.log('test mounted')
    }

    componentDidUpdate() {
        console.log('test updated')
    }

    render() {
        return (
            <>
                <p>{this.props.put}</p>
                <p>{this.state.perma}</p>
                <p>{this.props.test}</p>
            </>
        )
    }
}