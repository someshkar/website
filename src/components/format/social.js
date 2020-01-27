import React from 'react'
import styled from 'styled-components'

import socialItems from '../../data/social'

const Container = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Item = styled.a`
  text-decoration: none;
  padding: 4px;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.headingColor};
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 0.7;
  }
`

const SocialItems = () => (
  <Container>
    {socialItems.map(item => (
      <Item target="_blank" href={item.href} title={item.title}>
        {item.icon}
      </Item>
    ))}
  </Container>
)

export default SocialItems
