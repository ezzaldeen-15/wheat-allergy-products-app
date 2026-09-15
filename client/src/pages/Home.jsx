import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageContext } from '../context/LanguageContext';
import './Home.css';

function Home() {
  const { t } = useLanguageContext();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h2>{t('home.welcome')}</h2>
          <p>{t('home.subtitle')}</p>
          <Link to="/" className="btn btn-primary btn-large">
            {t('home.startShopping')}
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>{t('home.whyChoose')}</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">✓</div>
            <h3>{t('home.glutenFree')}</h3>
            <p>{t('home.glutenFreeDesc')}</p>
          </div>
          <div className="feature-card">
            <div className="icon">🔬</div>
            <h3>{t('home.labTested')}</h3>
            <p>{t('home.labTestedDesc')}</p>
          </div>
          <div className="feature-card">
            <div className="icon">🚚</div>
            <h3>{t('home.fastShipping')}</h3>
            <p>{t('home.fastShippingDesc')}</p>
          </div>
          <div className="feature-card">
            <div className="icon">💬</div>
            <h3>{t('home.expertSupport')}</h3>
            <p>{t('home.expertSupportDesc')}</p>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>{t('home.popularCategories')}</h2>
        <div className="categories-grid">
          <Link to="/" className="category-card">
            <div className="category-icon">🍞</div>
            <h3>{t('home.bread')}</h3>
          </Link>
          <Link to="/" className="category-card">
            <div className="category-icon">🍰</div>
            <h3>{t('home.sweets')}</h3>
          </Link>
          <Link to="/" className="category-card">
            <div className="category-icon">🥨</div>
            <h3>{t('home.snacks')}</h3>
          </Link>
          <Link to="/" className="category-card">
            <div className="category-icon">🥖</div>
            <h3>{t('home.bakingMixes')}</h3>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
