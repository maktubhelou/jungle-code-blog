import { Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image';

const bannerHeight = 35

const StyledH1 = styled.h1`
  color: var(--primary-white);
  font-size: 8em;

  @media screen and (max-width: 600px) {
    font-size: 4em;
  }
`

const StyledP = styled.p`
  color: var(--primary-white);
  font-size: 2em;

  @media screen and (max-width: 600px) {
    font-size: 1.5em;
  }
`

export const Hero = ({ siteTitle, siteDescription, className }) => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "default-site-image.jpg" }) {
      id
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
       }
      }
    }
  `)

  const imageData = data.background.childImageSharp.fluid

  return (<Link to="/">
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      className={className}
    >
      <StyledH1>{siteTitle}</StyledH1>
      <StyledP>{siteDescription}</StyledP>
    </BackgroundImage>
  </Link>
  )
}

const StyledHero = styled(Hero)`
  background-color: var(--primary-accent);
  height: ${bannerHeight}vh;
  vw: 100vw;
  padding: 3rem;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export default StyledHero;