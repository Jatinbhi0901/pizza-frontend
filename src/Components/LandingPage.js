import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import Navigationbar from './Navigationbar'
import Transition from './Transition'

function LandingPage() {
  return (
    <>
        <Navigationbar/>
        <Transition/>
        <Menu/>
        <Footer/>

    </>
  )
}

export default LandingPage