import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import burger from '../assets/burger.svg';
import logo from '../assets/logo.png';
import close from '../assets/close.svg';

const Header = () => {

    const navigate = useNavigate();

    const goToHome = () => {
      navigate("/", { replace: true }); // Переход без возможности вернуться назад
      window.location.reload(); // Принудительная перезагрузка страницы
    };

  return (
    <header className="header">
        <div className="burger">
            <img src={burger} alt="" />
        </div>
        <div className="header__main-wrapp">
        <div className="logo">
                <img src={logo} onClick={goToHome} alt="" />
            </div>
            <div className="header__wrapp">
                <nav className="main__menu">
                    <div className="close">
                        <img src={close} alt="" />
                    </div>
                    <ul>
                        <li><Link onClick={goToHome}>Home</Link></li>
                        <li><Link to="destinations">Destinations</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="partners">Partner</Link></li>
                    </ul>
                </nav>
                <div className="btn__wrapp">
                    <button className="login__btn">Login</button>
                    <button className="register__btn">Register</button>
                </div>
            </div> 
        </div>
    </header>
  )
}

export default Header
