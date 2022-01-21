import React from 'react'


// import "@reach/menu-button/styles.css"
// import "@reach/dialog/styles.css";
import Header from './Header';
import Footer from './footer';




const Homelayout = ({ children }) =>{

    return (
      <div className="layout-basediv">
        <Header/>
          <main className="layout-mainhome">{children}</main>
        <Footer/>
      </div>
    )
  }



export default Homelayout
