import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../organisms/header"

const MainLayout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
                {children}
                <footer></footer>
            </div>
        </>
    )
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout
