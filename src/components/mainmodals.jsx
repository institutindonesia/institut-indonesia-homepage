import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "gatsby"


import Sub from "./sub"
// import Search from "../components/search"
import Modal from "./nModals";
import close1 from "../assets/close.inline.svg"
import Bars from "../images/bar.inline.svg"


class Main extends Component {
  state = {
    isModalOpen: false
  };

  toggleState = e => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  render() {
    // console.log(this.props.location)
    return (
      <>
        <button onClick={this.toggleState} className="menu-button" aria-label="modals">
            {/* <FontAwesomeIcon icon={"bars"}></FontAwesomeIcon> */}
            <Bars/>   
        </button>
        {this.state.isModalOpen && (
          <>
          <Modal id="modal" isOpen={this.state.isModalOpen} onClose={this.toggleState}>
            <div className="modal-div">
                <br/>
                
                <h3>
                  <Link className="link" to={`/`}>Blog</Link>
                  <Link className="link" to={`/tim/`}>Tim</Link>
                  <Link className="link" to={`/hubungi-kami/`}>Hubungi Kami</Link>
                  <Link className="link" to={`/dukung-kami/`}>Dukung Kami</Link>
                  {/* <Link className="link" to={`/layanan`}>Layanan</Link> */}
                </h3>
                
              <br></br>
                {/* <Search location={this.props.location}/> */}
                  
              <br></br> 
              <Sub/>
                  
              </div>
          </Modal>
            
          </>
        )}
      </>
    );
  }
}

export default Main;
