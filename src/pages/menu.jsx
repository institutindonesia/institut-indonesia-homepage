import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { usePalette } from 'react-palette';

const MenuPage = ({ data }) => {
  const ListMenus = data.menu.nodes.map((nodes) => {
    const { data, loading, error } = usePalette(nodes.childImageSharp.original.src);
    return (
      <li
        key={nodes.id}
        style={{
          background: data.vibrant
        }}>
        <GatsbyImage
          image={nodes.childImageSharp.gatsbyImageData}
          alt="Menu kopi dan makanan institut indonesia "
        />
        {console.log(nodes.childImageSharp.original.src)}
      </li>
    );
  });
  return <div className="menuPage">{ListMenus}</div>;
};

export const query = graphql`
  query MenupageQuery {
    menu: allFile(
      filter: { sourceInstanceName: { eq: "menus" } }
      sort: { order: ASC, fields: name }
    ) {
      nodes {
        id
        name

        childImageSharp {
          original {
            src
          }
          gatsbyImageData
        }
      }
    }
  }
`;

export default MenuPage;
