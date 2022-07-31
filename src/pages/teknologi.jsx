import React from 'react';
import { Link } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/Header"
import YoutubeEmbed from "../components/youtube";
const Tech = ({location}) => {
  return (
    <Layout location={location.pathname}>
      {console.log(location.pathname)}
      <div className='home english'>
        <h2> Technology </h2>
        <p>Semua skill yang bisa  membawamu bertahan di era teknologi seperti : digital marketing, video editing, etc.</p>
        <a href='https://wa.link/9w1m7s'> Hubungi </a>
        {/* <YoutubeEmbed embedId="rokGy0huYEA" /> */}
      </div>
      <div className='englishHome2 '>
        <div className='programContainer'>
          <h3>Digital Marketing </h3>
          <p>Anda bisa lebih tahu cara mempromosikan usaha secara online.</p>
        </div>
        <div className='programContainer'>
          <h3>Videography </h3>
          <p>Pembuatan video undangan, produk, perusahaan, dan real estate</p>
        </div>
        <div className='programContainer'>
          <h3>Photography</h3>
          <p>Diajarkan teknik pengambilan foto produk, close up, maupun untuk kebutuhan sosial media </p>
        </div>
        <div className='programContainer'>
          <h3>Web Design</h3>
          <p>Membuat website sederhana yang menarik seperti company profile, web galery photo, dan blog</p>
        </div>
        <div className='programContainer'>
          <h3>Teknisi Komputer</h3>
          <p>Perbaikan, dan pemeliharaan peralatan Komputer</p>
        </div>
        <div className='programContainer'>
          <h3>Desain Grafis</h3>
          <p>Pembuatan poster, logo, flyer, dan social media feeds</p>
        </div>
        <div className='programContainer'>
          <h3>Microsoft Office</h3>
          <p>Untuk meningkatkan kemampuan Ms. Office yang dibutuhkan oleh banyak pelaku dunia usaha dan dunia industri.</p>
        </div>
      </div>
    </Layout>
  )
};

export default Tech;
