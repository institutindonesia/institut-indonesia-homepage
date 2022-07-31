import React from 'react'
// import "inter-ui/inter.css";


// import "@reach/menu-button/styles.css"
// import "@reach/dialog/styles.css";

import Header from './Header';
import Footer from './footer';
import FloatingWhatsApp from 'react-floating-whatsapp'
import "../styles/wa/index.css"
import me from "../images/logoBlue.jpg"
// import 'react-floating-whatsapp-button/dist/index.css'
// import { SEO } from "./seo"
import { GatsbySeo } from 'gatsby-plugin-next-seo';


const Homelayout = ({ children, location }) =>{
  let header
  let pathnames = [
    '/teknologi',
    '/teknologi/',
  ]

  // let names

  // if (context?.slug === "/") {
  //   names = '/'
  // } else {
  //   names = `/${context?.slug}/`
  // }
  // function countSheep(limit) {
  //   for (var i = 1; i <= limit; i += 1) {
  //     pathnames.push(names + `${i}/`)
  //   }
  // }
  // countSheep(context?.numberOfPages);

console.log(location)
  if (pathnames.includes(location)) {
    header = (
      <>
      {/* {console.log("ada")} */}
      <Header/>
      
      </>
    )
  } else (
    <>
      {/* {console.log("gak ada")} */}
    </>
  ) 

    return (
      <>
        <GatsbySeo
          title='Using More of Config'
          description='This example uses more of the available config options.'
          canonical='https://www.canonical.ie/'
          openGraph={{
            url: 'https://www.url.ie/a',
            title: 'Open Graph Title',
            description: 'Open Graph Description',
            images: [
              {
                url: 'https://www.example.ie/og-image-01.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt',
              },
              {
                url: 'https://www.example.ie/og-image-02.jpg',
                width: 900,
                height: 800,
                alt: 'Og Image Alt Second',
              },
              { url: 'https://www.example.ie/og-image-03.jpg' },
              { url: 'https://www.example.ie/og-image-04.jpg' },
            ],
            site_name: 'SiteName',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
        <div className="layout-basediv">
          
            {/* {header} */}
            <Header/>
            <main className="layout-mainhome">{children}</main>
          <Footer/>
          <FloatingWhatsApp phoneNumber="+6281354298811" accountName="institutindonesia" avatar={me} />
        </div>
      </>
    )
  }

export default Homelayout

// export const Head = () => (
//   <SEO />
// )