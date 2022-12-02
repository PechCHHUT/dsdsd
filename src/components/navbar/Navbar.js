import React ,{useState} from 'react'
import './Navbar.css'

export const Navbar = () => {
    const [isShowNavbar, setShowNavbar] = useState(false);
    const toggleNavbar = () => {
        setShowNavbar(!isShowNavbar);
    };
    return (
    <>
        <div className='navbar'>
            <p className='logo'>PECH</p>
            <ul className={isShowNavbar ? "list list-active" : "list"}>
                <li className='li-active'>Home</li>
                <li>About</li>
                <li>What I Do</li>
                <li>Resume</li>
                <li>Portfolio</li>
                <li>Client</li>
                <li>Contact</li>
            </ul>
            <div className='media-icon'>
                <svg onClick={toggleNavbar} className='menu' width="18" height="18" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M1 3h14v3H1zm0 4h14v3H1zm0 4h14v3H1z"/>
                </svg>
                <a href='https://www.facebook.com/chhut.pech' target="_blank">
                    <svg className='facebook' width="18" height="18" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                    </svg>
                </a>
                <a href='https://www.facebook.com/codingkhpage/?ref=pages_you_manage' target="_blank">
                    <svg className='page' width="18" height="18" viewBox="0 0 1024 1024">
                        <path fill="currentColor" d="M288 128h608L736 384l160 256H288v320h-96V64h96v64z"/>
                    </svg>
                </a>
                <a href='https://www.youtube.com/channel/UCAZntaZ1MetxX8QeB6eWOEA' target="_blank">
                    <svg className='youtube' width="18" height="18" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104l.022.26l.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105l-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006l-.087-.004l-.171-.007l-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103l.003-.052l.008-.104l.022-.26l.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007l.172-.006l.086-.003l.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                    </svg>
                </a>
                <a href='https://t.me/chhutpech' target="_blank">
                    <svg className='telegram' width="18" height="18" viewBox="0 0 24 24">
                        <path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" fill="currentColor"/>
                    </svg>
                </a>
                <a href='https://www.tiktok.com/@coding_kh?lang=en'>
                    <svg className='tiktok' width="18" height="18" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>
                    </svg>
                </a>
            </div>
        </div>
        <div style={{height: "4rem"}}></div>
    </>
    )
}
