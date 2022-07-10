import React, { Component } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "gatsby"
// import useScrollDirection from "./scrollHooks"

// import Modals from "./mainmodals";

// import {
//   AppearingContainer,
//   AppearSequentialContainer
// } from 'react-appear-on-scroll'
// import 'react-appear-on-scroll/dist/index.css'


class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleState = this.toggleState.bind(this);
    this.controlNavbar = this.controlNavbar.bind(this);
    this.state = {
      isModalOpen: false,
      show: false,
      lastScrollY: 400,      
    };
  }

  controlNavbar = () => {
    if (typeof window !== 'undefined') {
      // console.log(window.scrollY); // Value of scroll Y in px
      if (window.scrollY  > this.state.lastScrollY) { // if scroll down hide the navbar
        this.setState({ show : true })
      } else { // if scroll up show the navbar
        this.setState({ show: false })
      }
      // // remember current page location to use in the next move
      // this.setState({
      //   lastScrollY: window.scrollY
      // });
    }
  };
  
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.controlNavbar);
      
      // cleanup function
      return () => {
        window.removeEventListener('scroll', this.controlNavbar);
      };
    } 

  } 

  toggleState = e => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  
  
  render() {
    let modal = "modal-desktop";
    let navClasses = 'nav-links';
    let navItemClasses = 'nav-link-item';
    
    console.log(this.state.show) 
    
    return (
      
    <header>
        <nav className={`active ${this.state.show && "hidden" } navbar`} >
        <div className="nav-belt">
          <div>
            <h4>
              <Link className="logo" to="/" >
                <div className="logo-image"></div>     
              </Link>
            </h4>
          </div>

          {/* <ul className={navClasses}>        
              <li className={navItemClasses}><Link to="/kegiatan">Kegiatan</Link></li>
              <li className={navItemClasses}><Link to="/donasi-buku">Donasi Buku</Link></li>
              <li className={navItemClasses}><Link to="/about">About</Link></li>
              <li className={navItemClasses} 
              onClick={this.toggleState}
              id="search-nav"
              >
                <a onClick={this.toggleState}>
                  <FontAwesomeIcon icon="search"/>
                </a>
              </li>
          </ul> */}
          {/* <div className={modal} >
            <Modals />
          </div> */}
          
       
        </div>
      </nav>
      

    </header>
      
    );
  }
}

export default Header;

