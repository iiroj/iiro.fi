import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

export default function BlogListing (props) {
  const Container = styled.div`
    box-shadow: inset 0 1px 0 hsla(0, 0%, 0%, 0.1);
  `
  const Header = styled.h3`
      margin: 0 auto;
      max-width: 30rem;
      padding: 5vh 1rem 2rem;
  `
  const Posts = styled.ol`
      margin: 0 auto;
      max-width: 30rem;
      padding: 0 1rem;
  `
  const Post = styled(Link)`
      font-family: Georgia, serif;
      display: inline-block;
      font-size: 1.2rem;
      font-style: italic;
      margin-bottom: 2rem;
  `

  const pageLinks = []
  const edges = props.edges

  edges.forEach((edge) => {
    const post = edge.node
    const slug = post.fields.slug
    const title = post.frontmatter.title

    pageLinks.push(
      <li key={slug}>
        <Post to={slug}>
          <article>
            <h4>{title}</h4>
          </article>
        </Post>
      </li>
    )
  })

  return (
    <Container>
      <Header>Blog:</Header>
      <Posts>
        {pageLinks}
      </Posts>
    </Container>
  )
}
