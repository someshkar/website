import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import propTypes from 'prop-types'

const Link = ({ to, children }) => (
  <OutboundLink href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </OutboundLink>
)

Link.propTypes = propTypes.shape({
  children: propTypes.string.isRequired,
  to: propTypes.string.isRequired,
})

export default Link
