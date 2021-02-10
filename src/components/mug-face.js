import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import { H1 } from './page-elements'

const Wavy = styled.span`
  img {
    height: 40px;
    width: 40px;
  }
`

export const MugFace = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Img
        alt="mug face"
        fluid={data.placeholderImage.childImageSharp.fluid}
        // fadeIn={false}
        // loading="eager"
      />
      <H1>
        Hello World!
        <Wavy>
          <img
            alt="waving hand emoji"
            src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
          />
        </Wavy>
      </H1>
    </>
  )
}
