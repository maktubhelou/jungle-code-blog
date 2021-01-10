import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import SEO from 'react-seo-component'
import { Layout } from '../components/Layout'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

const StyledNavButton = styled.li`
    padding: 0.2em 3em;
    margin: 1em;
    background-color: var(--secondary-accent);
    color: var(--primary-white);

    ::before {
        content: "${props => props.before}"
    }

    ::after {
        content: "${props => props.after}"
    }
`

const Nav = styled.ul`
    margin-top: 5em;
    list-style-type: none;
    display: inline-block;
`

export default ({ data, pageContext }) => {
    const { frontmatter, body, fields, excerpt } = data.mdx
    const { title, date, cover } = frontmatter
    const { previous, next } = pageContext;
    const {
        image,
        siteUrl,
        siteLanguage,
        siteLocale,
        twitterUsername,
        authorName
    } = useSiteMetadata()
    return (
        <Layout>
            <SEO
                title={title}
                description={excerpt}
                image={
                    cover === null
                        ? `${siteUrl}${image}`
                        : `${siteUrl}${cover.publicURL}`
                }
                pathname={`${siteUrl}${fields.slug}`}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
                author={authorName}
                article={true}
                publishedDate={date}
                modifiedDate={new Date(Date.now()).toISOString()}

            />
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <MDXRenderer>{body}</MDXRenderer>
            <Nav>

                {previous === false ? null : (
                    <>
                        {previous && (
                            <>
                                <Link to={previous.fields.slug}>
                                    <StyledNavButton before={"<  "}>{previous.frontmatter.title}</StyledNavButton>
                                </Link>
                            </>
                        )}
                    </>
                )}
                {next === false ? null : (
                    <>
                        {next && (
                            <Link to={next.fields.slug}>
                                <StyledNavButton after={"  >"}>{next.frontmatter.title}</StyledNavButton>
                            </Link>
                        )}
                    </>
                )}
            </Nav>
        </Layout>
    )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
      mdx(fields: { slug: { eq: $slug } }) {
          frontmatter {
              title
              date(formatString: "YYYY MMMM Do")
              cover {
                  publicURL
              }
          }
          body
          excerpt
          fields {
              slug
          }
      }
  }
`;