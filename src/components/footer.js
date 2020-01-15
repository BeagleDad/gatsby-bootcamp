import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
    return (<footer>
        <p>Created by {data.site.siteMetadata.author}, © 2020</p>
    </footer>)
}

export default Footer