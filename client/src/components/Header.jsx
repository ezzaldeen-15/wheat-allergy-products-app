import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageContext } from '../context/LanguageContext';
import useCartStore from '../store/cartStore';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

function Header() {
  const { t } = useLanguageContext();
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>🌾 {t('home.welcome')}</h1>
        </Link>
        <nav className="nav">
          <Link to="/">{t('header.home')}</Link>
          <Link to="/">{t('header.products')}</Link>
          <Link to="/">{t('header.login')}</Link>
          <Link to="/" className="cart-link">
            🛒 {t('header.cart')} ({itemCount})
          </Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Header;
