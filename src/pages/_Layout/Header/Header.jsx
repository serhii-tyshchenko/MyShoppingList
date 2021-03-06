import React from 'react';
import { AuthBtn } from 'modules/user';
import { ThemeToggler, LanguageSelector } from 'modules/settings';
import { SuggestionListBtn } from 'modules/data';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__content wrapper">
      <div className="header__logo">
        <span className="header__title">ShopList</span>
      </div>
      <div className="header__menu">
        <LanguageSelector />
        <SuggestionListBtn />
        <ThemeToggler />
        <AuthBtn />
      </div>
    </div>
  </header>
);

export { Header };
