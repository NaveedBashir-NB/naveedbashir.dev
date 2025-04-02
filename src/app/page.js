import About from '@/Components/About'
import Contact from '@/Components/Contact'
import HeroSection from '@/Components/HeroSection'
import Portfolio from '@/Components/Portfolio'
import Skills from '@/Components/Skills'
import Testimonial from '@/Components/Testimonial'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}
