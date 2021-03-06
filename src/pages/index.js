import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import SEO from 'react-seo-component';
import { Layout } from '../components/Layout';
import { useSiteMetadata } from '../hooks/useSiteMetadata'

const IndexWrapper = styled.main``;

const StyledH1 = styled.h1`
  font-size: ${props => props.index === 0 ? "3.6em" : "2em"};
  text-decoration: underline;
`;

const PostWrapper = styled.div`
  margin: 5em auto;
`;

const Image = styled(Img)`
  border-radius: 5px;
  max-height: 20vh;
`;

const Date = styled.p`
  font-style: italic;
`

export default ({ data }) => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata()
  return (
    <IndexWrapper>
      <Layout>
        <SEO
          title={title}
          titleTemplate={"Home"}
          description={description}
          image={`${siteUrl}${image}`}
          pathname={siteUrl}
          siteLanguage={siteLanguage}
          siteLocale={siteLocale}
          twitterUsername={twitterUsername}
        />
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }, index) => (
          <PostWrapper>
            <Link to={fields.slug}>
              {!!frontmatter.cover ? (
                <Image
                  sizes={frontmatter.cover.childImageSharp.sizes}
                />

              ) : null}
              <br />
              <StyledH1 index={index}>{frontmatter.title}</StyledH1>
              <Date>{frontmatter.date}</Date>
              <p>{excerpt}</p>
            </Link>
          </PostWrapper>
        ))}
      </Layout>
    </IndexWrapper>
  )
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;