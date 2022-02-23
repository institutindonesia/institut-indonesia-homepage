import React from 'react';
import { Link } from "gatsby";
import Layout from "../components/layout";
import YoutubeEmbed from "../components/youtube";
const English = () => {
  return (
    <Layout>
          <div className='home english'>
              <h2> Belajar Bahasa Inggris</h2>
              <p>Mempelajari bahasa internasional supaya tetap relevan di era globalisasi</p>
              <a href='https://wa.wizard.id/2993f5'> Hubungi </a>
              {/* <YoutubeEmbed embedId="rokGy0huYEA" /> */}
          </div>
          <div className='englishHome2 '>
              <div className='programContainer'>
                <h3>Kids </h3>
                <ol>
                  <li>Level Silver</li>
                  <li>Level Gold</li>
                  <li>Level Platinum</li>
                </ol>
              </div>
              <div className='programContainer'>
                <h3>Teen </h3>
                <ol>
                  <li>Level Silver</li>
                  <li>Level Gold</li>
                  <li>Level Platinum</li>
                </ol>
              </div>
              <div className='programContainer'>
              <h3>Adult   </h3>
                <ol>
                  <li>Level Silver</li>
                  <li>Level Gold</li>
                  <li>Level Platinum</li>
                </ol>
              </div>
              <div className='programContainer'>
              <h3>English for Business </h3>
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

export default English;
