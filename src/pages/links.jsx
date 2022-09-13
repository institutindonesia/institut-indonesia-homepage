import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { RWebShare } from 'react-web-share';
// import SosialMedia from '../components/sosialMedia';
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
  const links = data.allNotion.edges.map((node) => (
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
            text: 'Like humans, flamingos make friends for life',
            url: 'https://on.natgeo.com/2zHaNup',
            title: 'Flamingos'
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
        <h2>Sosial Media Kami</h2>
        {links}
      </div>
      <div className="sosmed">
        {/* <SosialMedia /> */}
      </div>
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
    allNotion(
      filter: {
        properties: { links: { value: { ne: null } }, upload: { value: { name: { eq: "yes" } } } }
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
