import React, {useState} from 'react';
import './styles/header.scss';
import {Menu} from './index';
import { Link } from 'react-router-dom';

const Header = () => {
  const [openFlag, setOpenFlag] = useState(false);

  return (
    <div className="site-header-wrapper">
      <header className="site-header">
        <Link to="/">
          <h1 className="site-logo">TESLA test</h1>
        </Link>
        
        <ul className="global-nav center">
          <li className="center-list">
            <Link
              to="/models"
            >
              <span>Model S</span>
            </Link>
            </li>
          <li className="center-list">
            <Link
              to="/model3"
            >
              <span>Model 3</span>
            </Link>
            </li>
          <li className="center-list">
            <Link
              to="/modelx"
            >
              <span>Model X</span>
            </Link>
            </li>
          <li className="center-list">
            <Link
              to="/modely"
            >
              <span>Model Y</span>
            </Link>
            </li>
          <li className="center-list">
            <Link
              to="/solarroof"
            >
              <span>Solar Roof</span>
            </Link>
            </li>
          <li className="center-list">
            <Link
              to="/solarpanels"
            >
              <span>Solar Panels</span>
            </Link>
            </li>
        </ul>
        <ul className="global-nav end">
          <li className="end-list" id="shop">
            <Link
              to="/shop"
            >
              <span>ショップ</span>
            </Link>
            
          </li>
          <li className="end-list" id="account">
            <Link
              to="/account"
            >
              <span>アカウント</span>
            </Link>
            
          </li>
          <li className="end-list">
            <button
              className="menu-btn"
              onClick={() => setOpenFlag(true)}
            >
              <span>メニュー</span>
            </button>
          </li>
        </ul>
        <Menu setOpenFlag={setOpenFlag} openFlag={openFlag}/>
      </header>
    </div>
  )
}

export default Header;