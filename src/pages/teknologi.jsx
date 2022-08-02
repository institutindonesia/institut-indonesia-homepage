import React from 'react';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import Header from "../components/Header"
import YoutubeEmbed from "../components/youtube";
import Hubungi from '../components/hubungi';

import KidsIcon from "../assets/icon_for_english/KidsIcon.inline.svg"
import DigitalMarketing from "../assets/icon_for_tech/digitalMarketing.inline.svg"
import TeenIcon from "../assets/icon_for_english/teenIcon.inline.svg"
import AdultIcon from "../assets/icon_for_english/AdultIcon.inline.svg"
import BussinessIcon from "../assets/icon_for_english/bussinesIcon.inline.svg"
import ToeflIcon from "../assets/icon_for_english/Toefl.inline.svg"
import IeltsIcon from "../assets/icon_for_english/Ielts.inline.svg"
const Tech = ({ location }) => {
  return (
    <Layout location={location.pathname} title='Learning Tech | Belajar Teknologi'>
      <div className='home tech'>
        <div className='left'>
          <Link to='/' ><div className="logo-image home-image"></div></Link>
          <h2> Technology </h2>
          <p>Semua skill yang bisa  membawamu bertahan di era teknologi seperti : digital marketing, video editing, etc.</p>
          <Hubungi />
        </div>
        <StaticImage src="../images/TechBg.png" className='tech-image' imgClassName='tech-image' placeholder="dominantColor" imgStyle={{ height: 'auto' }} alt="Orang Belajar Bahasa Teknologi" />
      </div>
      <div className='tech2 '>
        <div className='programContainer'>
          <div className='Titles'>
            {/* <div className='KidsIcon'></div> */}
            <StaticImage src='../assets/icon_for_tech/digitalMarketing.inline.png' className='KidsIcon' placeholder="dominantColor" alt="Digital Marketing" />
            {/* <DigitalMarketing className='KidsIcon' /> */}
            <div className='text'>
              <h3>Digital Marketing </h3>
              <h3></h3>
            </div>
          </div>
          <p>Anda bisa lebih tahu cara mempromosikan usaha secara online.</p>
        </div>
        <div className='programContainer'>
          <div className='Titles'>
            {/* <div className='KidsIcon'></div> */}
            <KidsIcon className='KidsIcon' />
            <div className='text'>
              <h3>Videography </h3>
              <h3></h3>
            </div>
          </div>
          <h3> </h3>
          <p>Pembuatan video undangan, produk, perusahaan, dan real estate</p>
        </div>
        <div className='programContainer'>
          <div className='Titles'>
            {/* <div className='KidsIcon'></div> */}
            <KidsIcon className='KidsIcon' />
            <div className='text'>
              <h3>Photography </h3>
              <h3></h3>
            </div>
          </div>
          <p>Diajarkan teknik pengambilan foto produk, close up, maupun untuk kebutuhan sosial media </p>
        </div>
        <div className='programContainer'>
          <div className='Titles'>
            {/* <div className='KidsIcon'></div> */}
            <KidsIcon className='KidsIcon' />
            <div className='text'>
              <h3>Web Design </h3>
              <h3></h3>
            </div>
          </div>
          <p>Membuat website sederhana yang menarik seperti company profile, web galery photo, dan blog</p>
        </div>
        <div className='programContainer'>
          <div className='Titles'>
            {/* <div className='KidsIcon'></div> */}
            <KidsIcon className='KidsIcon' />
            <div className='text'>
              <h3>Teknisi Komputer </h3>
              <h3></h3>
            </div>
          </div>
          <p>Perbaikan, dan pemeliharaan peralatan Komputer</p>
        </div>
        <div className='programContainer'>
          <div className='Titles'>
            {/* <div className='KidsIcon'></div> */}
            <KidsIcon className='KidsIcon' />
            <div className='text'>
              <h3>Desain Grafis </h3>
              <h3></h3>
            </div>
          </div>
          <p>Pembuatan poster, logo, flyer, dan social media feeds</p>
        </div>
        <div className='programContainer'>
          <div className='Titles'>
            {/* <div className='KidsIcon'></div> */}
            <KidsIcon className='KidsIcon' />
            <div className='text'>
              <h3>Microsoft Office</h3>
              <h3></h3>
            </div>
          </div>
          <p>Untuk meningkatkan kemampuan Ms. Office yang dibutuhkan oleh banyak pelaku dunia usaha dan dunia industri.</p>
        </div>
      </div>
    </Layout>
  )
};

export default Tech;
