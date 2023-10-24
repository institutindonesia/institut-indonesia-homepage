import React from 'react';
import { Link } from 'gatsby';
import Hubungi from '../hubungi';
import Maps from "../../images/maps.inline.svg";
import Fb from "../../images/fb.inline.svg";
import Ig from "../../images/ig.inline.svg";
// import Logo from '../assets/logo.inline.svg';

const ScholarshipFooter = () => {
    return (
        <footer className="footer-div">
            <h2>Lambat join, entar nyesel loh...</h2>
            <a href='https://wa.me/6287842337112'>
                Daftar
            </a>

            <div className='flex info  gap-4'>
                <a className='bg-tra'  href='https://goo.gl/maps/6bvcRPMp8C7U44mv8'>
                    <Maps className='mapsIcon' />
                    <p>Jalan Bali No. 12 Jeppe’e, Tanete Riattang Barat, Bone</p>
                </a>
                <a className='' href='https://web.facebook.com/Institut-Indonesia-109619231523614/'>
                    <Fb className='FbIcon' />
                    <p>@institutindonesia</p>
                </a>
                <a className='' href='https://www.instagram.com/institutindonesia.official/'>
                    <Ig className='IgIcon' />
                    <p>@institutindonesia.official</p>
                </a>
            </div>
        </footer>
    );
}

export default ScholarshipFooter;
