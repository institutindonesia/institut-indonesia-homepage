// gatsby index.js:
import React, { useEffect, useState } from 'react';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout";
import YoutubeEmbed from "../components/youtube";
import Faq from "react-faq-component";
import { SEO } from "../components/seo"
import Hubungi from "../components/hubungi"
import AddTripButton from '../components/AddTripButton';

import Benar from "../images/BenarCricle.inline.svg"
import IndonesiaFlag from "../assets/flag/indonesia.inline.svg";
import UsaFlag from "../assets/flag/usa.inline.svg";
import En from "../assets/lang/En.inline.svg"
import Id from "../assets/lang/Id.inline.svg"
import Logo from '../assets/logoFull.inline.svg';

const IndexPage = () => {
  // const [state, setState] = useState('En')
  const [tripType, setTripType] = useState("En");

  return (
    <Layout title="">
      <div className="home">
        <div className="containerinhome">
          {/* <div className="logo-image home-image"></div> */}
          <Logo className="logo-image home-image" />
          <h2>
            Asah <strong>Skillmu,</strong> <br /> Raih
            <strong> Masa Depanmu</strong> <br /> Bersama Kami{' '}
          </h2>
          <p>
            Segera belajar tentang <strong>ENGLISH</strong>,<strong>TECHNOLOGY</strong> dan{' '}
            <strong>PUBLIC SPEAKING</strong> untuk mendapat skill baru.
          </p>
          <Hubungi />
        </div>
        <YoutubeEmbed embedId="OI0NAPFY8cY" />
      </div>
      <div className="home2">
        <h2>Benefits</h2>
        <div className="BenefitsContainer">
          <div className="left">
            <div className="home2container">
              {/* <div className="manfaatIcon1"></div>  */}
              <Benar className="manfaatIcon1" />
              <div className="text">
                <h3>Pembelajaran yang update</h3>
                <p>
                  Pelajaran yang kami berikan sesuai dengan apa yang dibutuhkan di era sekarang dan
                  yang akan datang
                </p>
              </div>
            </div>
            <div className="home2container">
              {/* <div className="manfaatIcon2"></div>  */}
              <Benar className="manfaatIcon2" />
              <div className="text">
                <h3>Tutor berpengalaman</h3>
                <p>Instruktur yang ada sudah capable dalam bidang masing-masing</p>
              </div>
            </div>
            <div className="home2container">
              {/* <div className="manfaatIcon3"></div>  */}
              <Benar className="manfaatIcon3" />
              <div className="text">
                <h3>Biaya terjangkau</h3>
                <p>Dipastikan harga bersahabat dengan kualitas terbaik</p>
              </div>
            </div>
            <div className="home2container">
              {/* <div className="manfaatIcon3"></div>  */}
              <Benar className="manfaatIcon3" />
              <div className="text">
                <h3>Multimedia Learning system</h3>
                <p>Sistem pembelajaran yang menerapkan multimedia di dalam prosesnya</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="home2container">
              {/* <div className="manfaatIcon4"></div> */}
              <Benar className="manfaatIcon1" />
              <div className="text">
                <h3>Gratis konsultasi</h3>
                <p>
                  Sesi tanya jawab dengan Instruktur berpengalaman yang disediakan secara gratis
                </p>
              </div>
            </div>
            <div className="home2container">
              <Benar className="manfaatIcon1" />
              <div className="text">
                <h3>Jadwal kelas fleksibel</h3>
                <p>Peserta bisa memilih waktu pembelajaran</p>
              </div>
            </div>
            <div className="home2container">
              {/* <div className="manfaatIcon6"></div>  */}
              <Benar className="manfaatIcon1" />
              <div className="text">
                <h3>Active English Environment</h3>
                <p>Lingkungan sangat mendukung dalam perkembangan bahasa</p>
              </div>
            </div>
            <div className="home2container">
              {/* <div className="manfaatIcon6"></div>  */}
              <Benar className="manfaatIcon1" />
              <div className="text">
                <h3>GRATIS kelas percobaan</h3>
                <p>Peserta bisa mengikuti kelas gratis untuk mencoba pembelajaran yang ada</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pembelajaranKami">
          <h2>Our Programs</h2>
          {/* <p>Berikut pembelajaran yang kami tawarkan </p> */}
          <div className="pembelajaranKamiDiv">
            <div className="pembelajaranKamiContainer">
              <h2>
                {' '}
                <span className="english-image"></span> English
              </h2>
              <p>
                Menguasai Bahasa Inggris dengan cepat dan tepat dengan sistem pengajaran terbaik.
              </p>
              <Link to="english"> Selengkapnya </Link>
            </div>
            <div className="pembelajaranKamiContainer">
              <h2>
                {' '}
                <span className="tech-image"></span> Technology
              </h2>
              <p>
                Menguasai Teknologi yang dibutuhkan dalam dunia usaha dan industri (digital
                marketing, video editing, etc.)
              </p>
              <Link to="teknologi"> Selengkapnya </Link>
            </div>
            <div className="pembelajaranKamiContainer publicSpeaking">
              <h2>
                {' '}
                <span className="public-image"></span> Public Speaking
              </h2>
              <p>
                Program khusus untuk para public speaker yang akan membantu meningkatkan skill cara
                melakukan presentasi, berbicara di depan umum yang tepat dan diajarkan mulai dari
                persiapan, pelaksanaan hingga evaluasi.
              </p>
              <Hubungi />
            </div>
          </div>
        </div>
        <div className="ProsesContainer">
          <h2>Proses Mendaftar</h2>
          <div className="ProsesContainerChild">
            <div className="ProsesContainerItem">
              <div className="circleIconBlack"></div>
              <h3>Hubungi CS</h3>
              <p>Tekan Tombol Hubungi, yang akan membawa Anda ke nomor CS </p>
            </div>
            <div className="ProsesContainerItem">
              <div className="circleIconGreen"></div>
              <h3>Masukkan Data</h3>
              <p>Masukkan data di form yang di berikan CS</p>
            </div>
            <div className="ProsesContainerItem">
              <div className="circleIconPurple"></div>
              <h3>Tunggu Konfirmasi</h3>
              <p>Tunggu Konfirmasi Tim kami untuk mengecek data Anda</p>
            </div>
            <div className="ProsesContainerItem">
              <div className="circleIconRed"></div>
              <h3>Datang ke Lokasi</h3>
              <p>Selanjutnya Anda hanya perlu datang ke kantor</p>
            </div>
          </div>
        </div>
        <div className="CheriContainer">
          <StaticImage
            src="../images/Cheri.png"
            className="Chery"
            placeholder="dominantColor"
            imgStyle={{ height: 'auto' }}
            alt="Chery ketua kadin"
          />
          <div className="desc">
            <div className="flag">
              <div className="AddTripButton">
                <div
                  className="radio-btn"
                  onClick={() => {
                    setTripType('En');
                  }}>
                  <input type="radio" value={tripType} name="En" checked={tripType == 'En'} />
                  <label for="En">En</label>
                </div>
                <div
                  className="radio-btn"
                  onClick={() => {
                    setTripType('Id');
                  }}>
                  <input type="radio" value={tripType} name="Id" checked={tripType == 'Id'} />
                  <label for="Id">Id</label>
                </div>
              </div>
            </div>

            {tripType === 'En' && (
              <div>
                <h3>Dr. Hj. Cheriani, S.Si, S.Pd, M.Pd </h3>
                <h4>
                  Director of the Indonesian Institute <br /> The Chairman of Indonesian Chamber of
                  Commerce and Industry in Bone Regency
                </h4>
                <p>
                  The Institut Indonesia is present as a solution to the high unemployment rate due
                  to the lack of skills and competencies of workers who are ready to face the world
                  of work, business and industry which is increasingly competitive and requires high
                  productivity.
                  <br />
                  <br />
                  The Institut Indonesia thinks about the importance of upskilling & reskilling,
                  both English language skills, IT mastery and good communication skills so that it
                  is easier to adapt to the changes and demands of the present and future eras and
                  ready to face the challenges of Era Society 5.0.
                </p>
              </div>
            )}
            {tripType === 'Id' && (
              <div>
                <h3>Dr. Hj. Cheriani, S.Si, S.Pd, M.Pd </h3>
                <h4>
                  Direktur utama Institut Indonesia <br />
                  Ketua Kamar Dagang dan Industri (Kadin) Bone
                </h4>
                <p>
                  Institut indonesia hadir sebagai solusi atas tingginya angka pengangguran karena
                  minimnya keterampilan dan kompetensi tenaga kerja yang siap menghadapi dunia
                  kerja, dunia usaha dan dunia industri yang semakin kompetititf dan membutuhkan
                  priduktivitas yang tinggi.
                  <br />
                  <br />
                  Institut indonesia memikirkan pentingnya upskilling & Reskilling baik skill
                  kemampuan berbahasa inggris, penguasaan IT maupun kemampuan berkomunikasi yang
                  baik sehingga lebih mudah beradaptasi dengan perubahan dan tuntutan era sekarang
                  dan masa depan serta siao menghadapi tantangan Era Society 5.0.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage

