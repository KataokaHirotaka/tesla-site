import React from 'react'
import { HeroSection, Button } from './../index';
import '../styles/button.scss';

function Home() {
  return (
    <>
      <HeroSection
        title="Model 3"
        img="/image/tesla-1.jpeg"
        homeFlag={true}
        text="試乗のご予約とテスラのイベント情報はこちら"
        styleClass="home"
      />
      <div className="btns-wrapper">
        <Button
          commonClass="btns"
          btnStyle="first-btn"
          link="/models/design"
        >
          カスタムオーダー
        </Button>
        <Button
          commonClass="btns"
          btnStyle="second-btn"
          link="/inventory/new/ms"
        >
          在庫車
        </Button>
      </div>
      
    </>
  )
}

export default Home
