import React from 'react'
import PageBanner from '../components/PageBanner'
import ServiceCategory from '../components/service/ServiceCategory'
import ServiceProcess from '../components/service/ServiceProcess'
import RequestQuote from '../components/service/RequestQuote'
import  "../service.css"
const Service = () => {
  return (
    <div>
      <PageBanner
      title="Services" 
      breadcrumb="Home / About us "
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZGf-GlCJSdr89-hfxAsCUr2gTTbcO2oO479A5d6iZ_surojWxDLNkWdSk&s=10"
      />

      <ServiceCategory />
      <ServiceProcess />
      <RequestQuote />
    </div>
  )
}

export default Service