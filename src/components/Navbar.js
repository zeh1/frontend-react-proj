import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'



export default class Navbar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        let username = 'Guest'
        if (this.props.token) {
            const payload = JSON.parse(atob(this.props.token.split('.')[1]))
            username = payload.username
        }

        const NavbarAuth = (
            <div className='navbar-container'>
                <div className='navbar'>
                    <div className='left'>
                        <Link to='/'>Welcome {username}</Link>
                    </div>
                    <div className='right'>
                        <ul>
                            <li><Link to='/account'>Account</Link></li>
                            <li><Link to='/logout'>Log out</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
        
        const NavbarUnauth = (
            <div className='navbar-container'>
                <div className='navbar'>
                    <div className='left'>
                        <Link to='/'>Welcome {username}</Link>
                    </div>
                    <div className='right'>
                        <ul>
                            <li><Link to='/login'>Log in</Link></li>
                            <li><Link to='/signup'>Sign up</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )

        if (this.props.isAuth) {
            return NavbarAuth
        } else {
            return NavbarUnauth
        }
    }

}