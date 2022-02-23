// gatsby index.js:
import React, { useEffect, useState } from 'react';
import { Link } from "gatsby";
import Layout from "../components/layout";
import YoutubeEmbed from "../components/youtube";
import Faq from "react-faq-component";

const data = {
  // title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "black",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const IndexPage = () => {
  return (
    <Layout >
      <div className='home'>
        <h2> Asah Skillmu & Raih Mimpimu bersama Kami </h2>
        <p>segera belajar tentang bahasa inggris dan teknologi untuk dapat skill baru.</p>
        <Link to="/hubungi"> Hubungi </Link>
        <YoutubeEmbed embedId="rokGy0huYEA"/>
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
        <div className='home2container' >
          <div className="manfaatIcon2"></div> 
          <div>
            <h3>Kenalan dengan pemilik bisnis lain</h3>
            <p>Berkenalan dengan orang-orang yang memiliki tujuan yang sama, yaitu bekerja dan membuat bisnis</p>
          </div>
        </div>
        <div className='home2container'>
          <div className="manfaatIcon3"></div> 
          <div>
            <h3>fasilitas yang nyaman dan keren</h3>
            <p>Fasilitas yang kami sediakan sangat nyaman dan desainnya juga modern</p>
          </div>
        </div>
        <div className='home2container'>
          <div className="manfaatIcon4"></div> 
          <div>
            <h3>Sesi mentoring pribadi eksklusif</h3>
            <p>Sesi tanya jawab dengan guru yang di sediakan </p>
          </div>
        </div>
        <div className='home2container'>
          <div className="manfaatIcon5"></div> 
          <div>
            <h3>Belajar langsung dari ahlinya</h3>
            <p>Guru yang kami sediakan ahli dalam bidangnya. </p>
          </div>
        </div>
        <div className='home2container'>
          <div className="manfaatIcon6"></div> 
          <div>
            <h3>Komunitas Ekslusif</h3>
            <p>Anda berkesempatan masuk kedalam komunitas alumni kami.</p>
          </div>
        </div>
        <div className='pembelajaranKami'>
          <h2>Our Program</h2>
          <p>Berikut pembelajaran yang kami tawarkan </p>
          <div className='pembelajaranKamiContainer'>
            <h2>English</h2>
            <p>bahasa adalah salah satu skill utama untuk bertahan di era sekarang. </p>
            <Link to="english"> Selengkapnya </Link>
          </div>
          <div className='pembelajaranKamiContainer'>
            <h2>Technology</h2>
            <p>Semua skill yang bisa  membawamu bertahan di era sekarang seperti : digital marketing, video editing, dll.</p>
            <Link> Selengkapnya </Link>
          </div>
        </div>
        <div className="ProsesContainer">
          <h2>Proses mendaftar</h2>
          <div className='ProsesContainerChild'>
            <div className='ProsesContainerItem'>
              <div className='circleIcon'></div>
              <h3>Hubungi CS</h3>
              <p>Tekan Tombol Hubungi, yang akan membawa Anda ke nomor CS </p>
            </div>
            <div className='ProsesContainerItem'>
              <div className='circleIcon'></div>
              <h3>Masukkan Data</h3>
              <p>Masukkan data di form yang di berikan CS</p>
            </div>
            <div className='ProsesContainerItem'>
              <div className='circleIcon'></div>
              <h3>Tunggu Konfirmasi</h3>
              <p>Tunggu Konfirmasi Tim kami untuk mengecek data Anda</p>
            </div>
            <div className='ProsesContainerItem'>
              <div className='circleIcon'></div>
              <h3>Datang ke Lokasi</h3>
              <p>Selanjutnya Anda hanya perlu datang ke kantor</p>
            </div>
          </div>
        </div>
        <div className='testimonyContainer'>
          <div className='profile'>
            <div className='profilePic'></div>
            <h4>Jenny Wilson</h4>
            <p>Vice President</p>
          </div>
          <div className='testimonyText'>
            <div className='komaAtas'></div>
            <p>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</p>
          </div>
        </div>
       
      </div>
      
    </Layout>
  )
}

export default IndexPage
