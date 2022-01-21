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
        <h2> Mau Dapat Income Tambahan ? </h2>
        <p>segera belajar tentang bahasa inggris dan teknologi untuk dapat skill baru.</p>
        <Link to="/hubungi"> Hubungi </Link>
        <YoutubeEmbed embedId="rokGy0huYEA"/>
      </div>
      <div className='home2'>
        <h2>Manfaat Dari Pelatihan Kami</h2>
        <div className='home2container'>
          <div className="manfaatIcon"></div> 
          <div>
            <h3>Time zones ain’t no thing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
          </div>
        </div>
        <div className='home2container' >
          <div className="manfaatIcon"></div> 
          <div>
            <h3>Full spectrum of services</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
          </div>
        </div>
        <div className='home2container'>
          <div className="manfaatIcon"></div> 
          <div>
            <h3>Impossible? We’re on it</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
          </div>
        </div>
        <div className='home2container'>
          <div className="manfaatIcon"></div> 
          <div>
            <h3>Flexible work terms</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</p>
          </div>
        </div>
        <div className='pembelajaranKami'>
          <h2>Pembelajaran Kami</h2>
          <p>Berikut pembelajaran yang kami tawarkan </p>
          <div className='pembelajaranContainer'>
            <div className='iconPembelajaran'></div>
            <div>
              <h3>Digital Marketing</h3>
              <p>bagaimana cara jualan di internet ? </p>
            </div>
            <div><Link>15 meetings</Link></div>
          </div>
          <div className='pembelajaranContainer'>
            <div className='iconPembelajaran'></div>
            <div>
              <h3>Videography</h3>
              <p>bagaimana cara merekam gambar yang menarik</p>
            </div>
            <div><Link>15 meetings</Link></div>
          </div>
          <div className='pembelajaranContainer'>
            <div className='iconPembelajaran'></div>
            <div>
              <h3>Photography</h3>
              <p>mengambil gambar yang cantik</p>
            </div>
            <div><Link>15 meetings</Link></div>
          </div>
          <div className='pembelajaranContainer'>
            <div className='iconPembelajaran'></div>
            <div>
              <h3>Programming</h3>
              <p>Membuat website jualan</p>
            </div>
            <div><Link>15 meetings</Link></div>
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
        <div className='faqContainer'>
          <h2>Pertanyaan yang sering di tanyakan</h2>
          <Faq
            data={data}
            styles={styles}
            config={config}
          />
        </div>
      </div>
      
    </Layout>
  )
}

export default IndexPage
