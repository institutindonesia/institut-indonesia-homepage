import React from 'react'


// import "@reach/menu-button/styles.css"
// import "@reach/dialog/styles.css";

import Header from './Header';
import Footer from './footer';
import FloatingWhatsApp from 'react-floating-whatsapp'
import "../styles/wa/index.css"
import me from "../images/logoBlue.jpg"
// import 'react-floating-whatsapp-button/dist/index.css'


const Homelayout = ({ children }) =>{

    return (
      <div className="layout-basediv">
        <Header/>

          <main className="layout-mainhome">{children}</main>
        <Footer/>
        <FloatingWhatsApp phoneNumber="+6281354298811" accountName="institutindonesia" avatar={me} />
      </div>
    )
  }



export default Homelayout
