import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "gatsby"

import Modals from "./mainmodals";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleState = this.toggleState.bind(this);
    this.state = {
      isModalOpen: false      
    };
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
    return (
      
    <header>
      <nav className="navbar">
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

