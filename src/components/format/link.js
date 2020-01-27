import React from 'react'
import propTypes from 'prop-types'

const Link = ({ to, children }) => (
  <a href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

Link.propTypes = propTypes.shape({
  children: propTypes.string.isRequired,
  to: propTypes.string.isRequired,
})

export default Link
