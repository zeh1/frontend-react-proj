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
                        individual post
                    </div>
                </div>
            </>
        )
    }

}