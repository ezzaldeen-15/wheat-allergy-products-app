import React from 'react';
import { useLanguageContext } from '../context/LanguageContext';
import './Footer.css';

function Footer() {
  const { t } = useLanguageContext();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{t('footer.aboutUs')}</h3>
          <p>{t('footer.aboutDesc')}</p>
        </div>
        <div className="footer-section">
          <h3>{t('footer.quickLinks')}</h3>
          <ul>
            <li><a href="#products">المنتجات</a></li>
            <li><a href="#about">عن</a></li>
            <li><a href="#contact">اتصل بنا</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t('footer.contact')}</h3>
          <p>{t('footer.email')}: info@wheatfreeparadise.com</p>
          <p>{t('footer.phone')}: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}

export default Footer;
