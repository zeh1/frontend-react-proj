import React from 'react'



export default class Post extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className='post-container'>
                    <div className='post'>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.body}</p>
                    </div>
                </div>
            </>
        )
    }

}