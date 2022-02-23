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
              <Link to="/hubungi"> Hubungi </Link>
              {/* <YoutubeEmbed embedId="rokGy0huYEA" /> */}
          </div>
          <div className='home2'>
              <h2>Benefits</h2>
              <div className='home2container'>
                  <div className="manfaatIcon1"></div>
                  <div>
                      <h3>Rencana pembelajaran yang pas untuk bisnismu</h3>
                      <p>Pembelajaran yang kami berikan sesuai dengan apa yang dibutuhkan bisnis sekarang</p>
                  </div>
              </div>
          </div>
    </Layout>
  )
};

export default English;
