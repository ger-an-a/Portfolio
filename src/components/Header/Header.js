import React from 'react';

import headerLogo from '../../images/logo.svg';
import headerLogoLight from '../../images/logo-light.svg';
import Navbar from '../Navbar/Navbar';

function Header(props) {
  return (
    <header className={`header header_theme_${props.theme}`}>
      <div className="header__container">
        <a href="#" className="link">
          <img src={props.theme === 'light' ? headerLogoLight : headerLogo} alt="Логотип." className="header__logo" />
        </a>
        <Navbar theme={props.theme} />
        <button onClick={props.onBtnClick} className={`link header__btn header__btn_theme_${props.theme}`}>Тема</button>
      </div>
    </header>
  );
}

export default Header;