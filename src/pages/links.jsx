import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { RWebShare } from 'react-web-share';
import Popup from 'reactjs-popup';

import "../styles/popUp/popUp.css"

import Share from '../svg/share.inline.svg';
import Logo from '../assets/logo.inline.svg';
import LogoFull from '../assets/logoFullNoColor.inline.svg';



const Links = ({ data }) => {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);
  const links = data.sosmed.edges.map((node) => (
    <li key={node.node.id}>
      <a href={node.node.properties.links.value}>{node.node.title}</a>
    </li>
  ));

  const caffee = data.menu.edges.map((node) => (
    <li key={node.node.id}>
      <a href={node.node.properties.links.value}>{node.node.title}</a>
    </li>
  ));

  return (
    <div className="linksPage">
      <div className={`topBar hidden ${show && 'active'}`}>
        {/* <Link to='/'>Home`</Link> */}
        <RWebShare
          data={{
            text: 'mari wujudkan mimpimu dengan menambah skill kamu',
            url: 'https://institutindonesia.com/links',
            title: 'Institut Indonesia Bone'
          }}
          onClick={() => console.log('shared successfully!')}>
          <button className="share">
            <Share />
          </button>
        </RWebShare>
        <Logo
          //   src="../images/logo.png"
          alt="@insitutindonesia, insitut indonesia"
          className="meCircle"
        />
        <Popup trigger={<button className='qrCode'> Qr Code</button>} position="center" modal>
          <div>Popup content here !!</div>
        </Popup>
      </div>
      <div className="head">
        <Logo
          //   src="../images/logo.png"
          alt="@insitutindonesia, insitut Indonesia"
          className="meCircle"
        />
        <h1>Institut Indonesia</h1>
        <p>Temukan dan Asah Kompetensi Skill Anda bersama Kami</p>
      </div>
      <div className="linksDiv">
        <h2>Menu Kami</h2>
        {/* {caffee} */}
        <Link to='/menu/'> Menu </Link>
      </div>
      <div className="linksDiv">
        <h2>Sosial Media Kami</h2>
        {links}
      </div>

      <div className="sosmed">{/* <SosialMedia /> */}</div>
      <div className="logoBottom">
        <h1>
          <Link to="/">
            <LogoFull />
          </Link>
        </h1>
      </div>
    </div>
  );
};

export const query = graphql`
  query HomePageQuery {
    sosmed: allNotion(
      filter: {
        properties: {
          links: { value: { ne: null } }
          upload: { value: { name: { eq: "sosmed" } } }
        }
      }
    ) {
      edges {
        node {
          properties {
            links {
              value
            }
          }
          title
        }
      }
    }
    menu: allNotion(
      filter: {
        properties: { links: { value: { ne: null } }, upload: { value: { name: { eq: "menu" } } } }
      }
    ) {
      edges {
        node {
          properties {
            links {
              value
            }
          }
          title
        }
      }
    }
  }
`;

export default Links;
