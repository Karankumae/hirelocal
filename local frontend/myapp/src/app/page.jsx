import React from 'react'
import Hero from '@/components/Home/Hero'
import Features from '@/components/Home/Feature'
import ContentSection from '@/components/Home/Content'
import TestimonialSection from '@/components/Home/Testimonials'
import FooterBlock from '@/components/Footer'
function page() {
  return (
    <>
    {/* hero */}
  <Hero/>

  {/* feature */}
  <Features/>
  {/* Content */}
  <ContentSection/>
  {/* Testimonial */}
  <TestimonialSection/>

    </>
  )
}

export default page