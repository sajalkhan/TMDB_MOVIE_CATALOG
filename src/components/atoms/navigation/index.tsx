import Logo from 'assets/icons/logo.svg';
import { ROUTES } from 'constants/routes';
import { mapModifiers } from 'libs/component';
import React from 'react';
import { Link } from 'react-router-dom';

export type navigationProps = {
  children?: React.ReactNode;
};

export const Navigation: React.FC<navigationProps> = ({ children }) => {
  const componentClassName = mapModifiers('a-navigation');
  const className = `${componentClassName}`.trim();

  return (
    <nav className={className}>
      <div className="a-navigation__items">
        <Link to={ROUTES.HOME} className="a-navigation__logo">
          <img src={Logo} alt="logo" />
          <span>The MovieDB</span>
        </Link>
        <div className="a-navigation__options">{children}</div>
      </div>
    </nav>
  );
};
