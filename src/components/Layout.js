import React from 'react';
import styled from 'styled-components'

import { useSiteMetadata } from '../hooks/useSiteMetadata'
import Hero from './Hero'

const ContentStyles = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2em;
`

export const Layout = ({ children }) => {
    const { title, description, authorBio } = useSiteMetadata()
    return (
        <>
            <Hero siteTitle={title} siteDescription={description} authorBio={authorBio} />
            <ContentStyles>
                {children}
            </ContentStyles>
        </>
    )
}