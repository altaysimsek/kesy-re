import React from 'react'
import Navbar from '@/components/shared/Navbar'
import SearchSection from './SearchSection'
import FeatureSection from './FeatureSection'

const Landing = () => {
  return (
    <>
        <Navbar/>
        <SearchSection/>
        <FeatureSection/>
    </>
  )
}

export default Landing