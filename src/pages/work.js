import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Heading from '../components/format/heading'

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <Heading>Coming Soon</Heading>
    <div style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
      For now, you can <Link to="/">go home</Link>.
    </div>
  </Layout>
)

export default WorkPage
