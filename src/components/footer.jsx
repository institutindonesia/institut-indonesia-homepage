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
                <div>
                    <Maps className='mapsIcon'/>
                    <p>Jalan Bali No. 12 Jeppe’e.</p>
                </div>
                <div>
                    <Fb className='FbIcon'/>
                    <p>@institutindoensia</p>
                </div>
                <div>
                    <Ig className='IgIcon'/>
                    <p>@institutindoensia</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
