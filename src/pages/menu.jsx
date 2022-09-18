import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { usePalette } from 'react-palette';

const MenuPage = ({ data }) => {
  const ListMenus = data.menu.image.map((nodes) => {
    const { data, loading, error } = usePalette(nodes.publicUrl);
    return (
      <li
        key={nodes.id}
        style={{
          background: data.vibrant
        }}>
        <GatsbyImage
          image={nodes.gatsbyImageData}
          alt="Menu kopi dan makanan institut indonesia "
        />
      </li>
    );
  });
  return <div className="menuPage">
    
    {ListMenus}</div>;
};

export const query = graphql`
  query MenupageQuery {
    menu: contentfulMenuImage {
      image {
        publicUrl
        gatsbyImageData
      }
    }
  }
`;

export default MenuPage;
