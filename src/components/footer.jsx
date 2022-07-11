import React from 'react'
import {Link } from 'gatsby'
import Maps from "../images/maps.inline.svg"
import Fb from "../images/fb.inline.svg"
import Ig from "../images/ig.inline.svg"
const Footer = () => {
    return (
        <footer className="footer-div">
           {/* <Link to="/Disclaimer/"> Disclaimer </Link>
           <Link to="/privacy/"> Privacy Policy </Link>
           <Link to="/tim/"> Tim </Link>
           <Link to="/hubungi-kami/"> Hubungi Kami</Link> */}
            <h2>Lambat join, ntar nyesel loh...</h2>
            <Link to="" className=''> Daftar </Link>
            <div className='info'>
                <a href='https://goo.gl/maps/7JC7fpV7qhVNoPbb7'>
                    <Maps className='mapsIcon'/>
                    <p>Jalan Bali No. 12 Jeppe’e.</p>
                </a>
                <a href='https://web.facebook.com/Institut-Indonesia-109619231523614/'>
                    <Fb className='FbIcon'/>
                    <p>@institutindoensia</p>
                </a>
                <a href='https://www.instagram.com/institutindonesia.official/'>
                    <Ig className='IgIcon'/>
                    <p>@institutindoensia</p>
                </a>
            </div>
        </footer>
    )
}

export default Footer
