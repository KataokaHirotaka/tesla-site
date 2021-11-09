import './styles/header.scss';

const Header = () => {
  return (
    <div className="site-header-wrapper">
      <header className="site-header">
        <h1 className="site-logo">TESLA</h1>
        <ul className="global-nav center">
          <li><a href=""><span>Model S</span></a></li>
          <li><a href=""><span>Model 3</span></a></li>
          <li><a href=""><span>Model X</span></a></li>
          <li><a href=""><span>Model Y</span></a></li>
          <li><a href=""><span>Solar Roof</span></a></li>
          <li><a href=""><span>Solar Panels</span></a></li>
        </ul>
        <ul className="global-nav end">
          <li><a href=""><span>Shop</span></a></li>
          <li><a href=""><span>Account</span></a></li>
          <li>
            <button className="menu-btn"><span>Menu</span></button>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header;