import React from "react"
import { graphql} from "gatsby";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data: {microcmsLanding} }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{microcmsLanding.element.heading}</h1>
      <p>{microcmsLanding.element.paragraph1}</p>
      <p>{microcmsLanding.element.paragraph2}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
} 

export default IndexPage

export const query = graphql`
  query {
    microcmsLanding {
      id
      element {
        heading
        paragraph1
        paragraph2
      }
    }
  }
`