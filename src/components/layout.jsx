import React from 'react'
import Header from './Header';
import Footer from './footer';
import FloatingWhatsApp from 'react-floating-whatsapp'
import "../styles/wa/index.css"
import me from "../images/logoBlue.jpg"

import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { useSiteMetadata } from "../hooks/use-site-metadata"


const Homelayout = ({ children, location, title }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl, social } = useSiteMetadata()
  let header
  let pathnames = [
    '/teknologi',
    '/teknologi/',
  ]

  if (pathnames.includes(location)) {
    header = (
      <>
        <Header />

      </>
    )
  } else (
    <>
    </>
  )

  return (
    <>
      <GatsbySeo
        title={title + ` ` + defaultTitle + ` Bone `}
        description={defaultDescription}
        canonical={siteUrl}
        openGraph={{
          url: `${siteUrl}`,
          title: `${title + defaultTitle + ` Bone `}`,
          description: `${defaultDescription}`,
          // images: [
          //   {
          //     url: 'https://www.example.ie/og-image-01.jpg',
          //     width: 800,
          //     height: 600,
          //     alt: 'Og Image Alt',
          //   },
          //   {
          //     url: 'https://www.example.ie/og-image-02.jpg',
          //     width: 900,
          //     height: 800,
          //     alt: 'Og Image Alt Second',
          //   },
          //   { url: 'https://www.example.ie/og-image-03.jpg' },
          //   { url: 'https://www.example.ie/og-image-04.jpg' },
          // ],
          site_name: `${title + defaultTitle + ` Bone `}`,
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <div className="layout-basediv">

        {/* {header} */}
        <Header />
        <main className="layout-mainhome">{children}</main>
        <Footer />
      </div>
      <FloatingWhatsApp phoneNumber="+6281779535036" className='waDiv' accountName="institutindonesia" avatar={me} />
    </>
  )
}

export default Homelayout
