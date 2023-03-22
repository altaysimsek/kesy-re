import React from 'react'
import Navbar from '@/components/shared/Navbar'
import SearchSection from './SearchSection'
import FeatureSection from './FeatureSection'
import AboutSection from './AboutSection'

const Landing = () => {
  return (
    <>
      <Navbar />
      <SearchSection />
      <FeatureSection />
      <AboutSection />
    </>
  )
}

export default Landing
