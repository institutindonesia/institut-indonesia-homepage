import React from 'react';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import YoutubeEmbed from "../components/youtube";
import Hubungi from '../components/hubungi';
import KidsIcon from "../assets/icon_for_english/KidsIcon.inline.svg"
import TeenIcon from "../assets/icon_for_english/teenIcon.inline.svg"
import AdultIcon from "../assets/icon_for_english/AdultIcon.inline.svg"
import BussinessIcon from "../assets/icon_for_english/bussinesIcon.inline.svg"
import ToeflIcon from "../assets/icon_for_english/Toefl.inline.svg"
import IeltsIcon from "../assets/icon_for_english/Ielts.inline.svg"
import Speaking from "../assets/icon_for_english/Speaking.inline.svg"

import Logo from '../assets/logoFull.inline.svg';

const English = () => {
  return (
    <Layout title='Learning English | Belajar Bahasa Inggris'>
      <div className='home english'>
        <div className='left'>
          <Link to='/' ><Logo className="logo-image home-image"/></Link>
          <h2> Belajar Bahasa Inggris</h2>
          <p>Mempelajari bahasa internasional supaya tetap relevan di era globalisasi</p>
          <Hubungi />
          {/* <YoutubeEmbed embedId="rokGy0huYEA" /> */}
        </div>
        <StaticImage src="../images/EnglishBg.png" className='english-image' imgClassName='english-image' placeholder="dominantColor" imgStyle={{ height: 'auto' }}  alt="Orang Belajar Bahasa Inggris" />
      
        {/* <div className='english-image'> </div> */}
      </div>
      <div className='englishHome2 '>
        <div className='programContainer  '>
          <div className='Titles'>
            {/* <div className='KidsIcon'></div> */}
            <KidsIcon className='KidsIcon' />
            <div className='text'>
              <h3 >English for Kids</h3>
              <h3>(6 - 9 years old) </h3>
            </div>
          </div>
          <p>These lessons are a fun way for young children to learn the alphabet, basic vocabulary, and simple sentences.</p>
        </div>
        <div className='programContainer'>
          <div className='Titles'>
            <TeenIcon className='teenIcon'></TeenIcon>
           <div className='text'>
              <h3>English for Teen </h3>
              <h3>(10 - 17 years old) </h3>
           </div>
          </div>
          <ol>
            <li>Level Silver</li>
            <li>Level Gold</li>
            <li>Level Platinum</li>
          </ol>
        </div>
        <div className='programContainer'>
          <div className='Titles'>
            <AdultIcon className='adultIcon'></AdultIcon>
            <div className='text'>
              <h3>English for Adult</h3>
              <h3>( 18+ years old) </h3>
            </div>
          </div>
          <ol>
            <li>Level Silver</li>
            <li>Level Gold</li>
            <li>Level Platinum</li>
          </ol>
        </div>
        <div className='programContainer'>
          <div className='Titles'>
            <BussinessIcon className='bussinesIcon'></BussinessIcon>
            <div className='text'>
              <h3>English for Business </h3>
              <h3> </h3>
            </div>
          </div>
          <ol>
            <li>Level Silver</li>
            <li>Level Gold</li>
            <li>Level Platinum</li>
          </ol>
        </div>
        <div className='programContainer'>
          <div className='Titles'>
            <IeltsIcon className='ieltsIcon'></IeltsIcon>
            <div className='text'>
              <h3>I E L T S </h3>
              <h3></h3>
            </div>
          </div>
          <p>
            The International English Language Testing System, is an international standardized test of English language proficiency for non-native English language speakers.
          </p>
        </div>
        <div className='programContainer'>
          <div className='Titles'>
            <ToeflIcon className='toeflIcon'></ToeflIcon>
            <div className='text'>
              <h3 >T O E F L</h3>
              <h3></h3>
            </div>
          </div>
          <p>
            Test of English as a Foreign Language is a standardized test to measure the English language ability of non-native speakers wishing to enroll in English-speaking universities.
          </p>
        </div>
        <div className='programContainer'>
          <div className='Titles'>
            <Speaking className='KidsIcon'/>
            <div className='text'>
              <h3 >Speaking Class</h3>
              <h3></h3>
            </div>
          </div>
          <ol>
            <li>Level Beginner</li>
            <li>Level Advance</li>
          </ol>
        </div>
      </div>
    </Layout>
  )
};

export default English;
