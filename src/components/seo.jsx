
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// console.log("title")
// console.log(canonical)
function Seo({ description, lang, meta, image: metaImage, title, pathname, schemaMarkup }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            owner
            siteUrl
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null
  const canonical = pathname ? `${site.siteMetadata.siteUrl}/${pathname}` : null
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      link={
        canonical
          ? [
            {
              rel: "canonical",
              href: canonical,
            },
          ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        // {
        //   name: "keywords",
        //   content: site.siteMetadata.keywords.join(","),
        // },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
              {
                property: "og:image",
                content: image,
              },
              {
                property: "og:image:width",
                content: metaImage.width,
              },
              {
                property: "og:image:height",
                content: metaImage.height,
              },
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
            ]
            : [
              {
                name: "twitter:card",
                content: "summary",
              },
            ]
        )
        .concat(meta)}
    >

      <meta charSet="utf-8" />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <link rel="canonical" href={canonical?`${canonical}`:`https://muhzulzidan.com`} />
      <meta name="description" content={`${metaDescription}`} />
      {schemaMarkup &&
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      }

    </Helmet>
  )
}
Seo.defaultProps = {
  lang: `id`,
  meta: [],
  description: ``,
}
Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}
export default Seo