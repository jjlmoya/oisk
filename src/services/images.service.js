import {useMemo} from "react"
import { useStaticQuery, graphql } from "gatsby"
let getImage = (src) => {
    const data = useStaticQuery(graphql`
      query {
      allFile( filter: { internal: { mediaType: { regex: "/image/" } } } ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
    const match = useMemo(() => (
        data.allFile.nodes.find(({relativePath}) => src === relativePath)
    ), [data, src]);

    console.log(match);
    return match.childImageSharp.fluid.src;
};

export default getImage;