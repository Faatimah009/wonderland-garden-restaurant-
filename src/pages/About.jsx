import React from 'react'
import PageBanner from '../components/PageBanner'
import OurStory from '../components/About/OurStory'
import OurValue from '../components/About/OurValue'
import WhyChoseUs from '../components/About/WhyChoseUs'
import MeetOurTeam from '../components/About/MeetOurTeam'

const About = () => {
  return (
    <div className="grid-reveal-banner">
  <PageBanner 
    title="About us" 
    breadcrumb="Home/ About us" 
    image="/image/banner.png" 
  />



      <OurStory />
      <OurValue />
      <WhyChoseUs />
      <MeetOurTeam />
    </div>
  )
}

export default About