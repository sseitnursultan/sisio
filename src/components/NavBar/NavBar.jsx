import React from 'react'
import c from './NavBar.module.css'



const NavBar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={c.item}>
                 <a href="/dialogs">Messages</a>
            </div>
            <div className={c.item}>
                 <a href="/news">News</a>
            </div>
            <div className={c.item}>
                <a href="/music">Music</a>
            </div>
            <div className={c.item}>
                <a href="/users">Users</a>
            </div>
        </nav>
    );
}

export default NavBar;