import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import './navbar.scss'
import {useState} from 'react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return ()=> (window.onscroll = null);
    }

    return (
        <div className={isScrolled? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                     alt="Netflix logo" height="120px" width="120px"/>
                    <span>Home Page</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>

                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>Kid</span>
                    <Notifications className="icon"/>
                    <img src="https://images.unsplash.com/photo-1628831609817-325636bb571b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt=""/>
                    <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
