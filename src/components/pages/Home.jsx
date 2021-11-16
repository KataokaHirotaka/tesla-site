import React from 'react'
import { HeroSection, Button } from './../index';

function Home() {
  return (
    <>
      <HeroSection />
      <Button
        commonClass="btns"
        btnStyle="first-btn"
        link="/models/design"
      >
        CUSTOM ORDER
      </Button>
      <Button
        commonClass="btns"
        btnStyle="second-btn"
        link="/inventory/new/ms"
      >
        EXISTING INVENTORY
      </Button>
    </>
  )
}

export default Home
