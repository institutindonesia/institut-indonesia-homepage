import React from 'react';
import { Link } from "gatsby";
import Layout from "../components/layout";
import YoutubeEmbed from "../components/youtube";
const Tech = () => {
  return (
    <Layout>
      <div className='home english'>
        <h2> Belajar Teknologi</h2>
        <p>Masa depan di gengaman mu dengan mempelajari teknologi</p>
        <a href='https://wa.wizard.id/2993f5'> Hubungi </a>
        {/* <YoutubeEmbed embedId="rokGy0huYEA" /> */}
      </div>
      <div className='englishHome2 '>
        <div className='programContainer'>
          <h3>Digital Marketing </h3>
          <ol>
            <li>Level Silver</li>
            <li>Level Gold</li>
            <li>Level Platinum</li>
          </ol>
        </div>
        <div className='programContainer'>
          <h3>Videography </h3>
          <ol>
            <li>Level Silver</li>
            <li>Level Gold</li>
            <li>Level Platinum</li>
          </ol>
        </div>
        <div className='programContainer'>
          <h3>Photography</h3>
          <ol>
            <li>Level Silver</li>
            <li>Level Gold</li>
            <li>Level Platinum</li>
          </ol>
        </div>
        <div className='programContainer'>
          <h3>Programming</h3>
          <ol>
            <li>Level Silver</li>
            <li>Level Gold</li>
            <li>Level Platinum</li>
          </ol>
        </div>
      </div>
    </Layout>
  )
};

export default Tech;
