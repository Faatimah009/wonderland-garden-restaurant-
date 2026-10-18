import React from 'react'

const PageBanner = ({title, breadcrumb,image}) => {
  return (
    <div className="page-banner" style={{backgroundImage:`url(${image})`}}>
      <section>
    <h1>{title}</h1>
    <p>{breadcrumb}</p>
      </section>
    </div>
  )
}

export default PageBanner
