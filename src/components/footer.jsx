import React from 'react'
import {Link } from 'gatsby'
import Hubungi from './hubungi'
import Maps from "../images/maps.inline.svg"
import Fb from "../images/fb.inline.svg"
import Ig from "../images/ig.inline.svg"
const Footer = () => {
    return (
        <footer className="footer-div">
            <h2>Lambat join, entar nyesel loh...</h2>
            <Hubungi text="Daftar"/>
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
