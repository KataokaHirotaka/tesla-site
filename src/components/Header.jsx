import React, {useState} from 'react';
import './styles/header.scss';
import {Menu} from './index';
import { Link } from 'react-router-dom';

const Header = () => {
  const [openFlag, setOpenFlag] = useState(false);

  return (
    <div className="site-header-wrapper">
      <header className="site-header">
        <h1 className="site-logo">TESLA test</h1>
        <ul className="global-nav center">
          <li className="center-list">
            <Link
              to="/model-s"
            >
              <span>Model S</span>
            </Link>
            </li>
          <li className="center-list">
            <Link
              to="/model-3"
            >
              <span>Model 3</span>
            </Link>
            </li>
          <li className="center-list">
            <Link
              to="/model-x"
            >
              <span>Model X</span>
            </Link>
            </li>
          <li className="center-list">
            <Link
              to="/model-y"
            >
              <span>Model Y</span>
            </Link>
            </li>
          <li className="center-list">
            <Link
              to="/solar-roof"
            >
              <span>Solar Roof</span>
            </Link>
            </li>
          <li className="center-list">
            <Link
              to="/solar-panels"
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