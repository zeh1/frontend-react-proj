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
                        <Link className='link' to='/'>Welcome {username}</Link>
                    </div>
                    <div className='right'>
                        <ul>
                            <li><Link className='link' to='/'>Account</Link></li>
                            <li><Link className='link' to='/' onClick={this.props.logout}>Log out</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
        
        const NavbarUnauth = (
            <div className='navbar-container'>
                <div className='navbar'>
                    <div className='left'>
                        <Link className='link' to='/'>Welcome {username}</Link>
                    </div>
                    <div className='right'>
                        <ul>
                            <li><Link className='link' to='/login'>Log in</Link></li>
                            <li><Link className='link' to='/signup'>Sign up</Link></li>
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