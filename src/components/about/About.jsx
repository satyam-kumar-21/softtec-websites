import React from 'react'
import CompanyOverview from './CompanyOverview'
import PageControl from '../PageControl'

function About() {
  return (
   <>
   <PageControl
        title="About Page"
        breadcrumb="About / Company Overview"
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1500&q=80"
      />
   <CompanyOverview />
   </>
  )
}

export default About
