import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, pathname }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
      }

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta
              http-equiv="Content-Type"
              content="text/html; charset=utf-8"
            />
            {seo.description && (
              <meta name="description" content={seo.description} />
            )}
            {seo.image && <meta name="image" content={seo.image} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            {seo.image && <meta name="twitter:card" content={seo.image} />}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            <meta
              name="keywords"
              content="káva,káva Olomouc,kavárna,kavárna Olomouc,Olomoucká kavárna,Olomoucké kavárny,kafárna,kafe,káva,coffee,coffee Olomouc,coffeeshop,coffeeshop Olomouc,Cokolif,cokolif kafárna, kafárna cokolif"
            />
            <meta property="og:type" content="website" />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:site_name" content={seo.title} />}
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`
