import React from 'react'
import TextBanner from './text-banner'
import PageLink from './page-link'

const intro = () => (
  <TextBanner>
    <h1>About</h1>
    <p>
      Humancrafted is a Bournemouth based and globally operating, engineering
      and product consultancy specialising in <b>User Experience</b>,{' '}
      <b>React.js</b> and <b>React Native</b>, <b>GraphQL</b>, <b>Node.js</b>{' '}
      and the extended Javascript ecosystem. In short, we build high quality
      exclusive mobile and web applications.
      <br />
      Launching a new product? Need help with an existing project?
    </p>
    <PageLink to="/about">Hear more about us</PageLink>
  </TextBanner>
)

export default intro
