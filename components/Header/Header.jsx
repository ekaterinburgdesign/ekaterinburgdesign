import classNames from 'classnames/bind';

import Menu from '../Menu';

import styles from './Header.module.scss'; 

const cx = classNames.bind(styles);

export default function Header({ menuItems }) {
  return (
    <header className={cx('header')}>
      <div className={cx('header__logo')}>
        <HeaderLogo color="#00B533" />
      </div>

      <nav className={'header__menu'}>
        <Menu items={menuItems} />
      </nav>
    </header>
  )
};


function HeaderLogo({ color }) {
  return (
    <svg
      width={35}
      height={64}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.475 63.612c7.296-3.211 12.14-10.334 14.483-17.807l-5.918-1.882C9.25 49.636 5.622 55.405 0 57.883l2.475 5.731v-.002zM19.732 0a5.898 5.898 0 00-3.292 1.024 5.985 5.985 0 00-2.176 2.697 6.053 6.053 0 00-.327 3.463 6.015 6.015 0 001.632 3.064 5.92 5.92 0 003.041 1.633 5.884 5.884 0 003.428-.346 5.951 5.951 0 002.66-2.21 6.04 6.04 0 00.999-3.33 6.04 6.04 0 00-1.753-4.245A5.922 5.922 0 0019.732 0zm2.884 30.983c2.762 3.214 7.217 5.224 11.31 5.947L35 30.758c-2.686-.473-5.87-1.738-7.698-3.863l-4.686 4.088zM7.184 36.322c0-6.523 2.06-11.989 8.282-14.605a77.066 77.066 0 01-2.105 13.96 3.167 3.167 0 00.096 1.832 3.135 3.135 0 001.095 1.465C22.884 45.352 26.075 53.892 27.702 64l6.113-1.005c-1.758-10.918-5.387-20.48-13.98-27.767.855-3.896 2.47-14.545 1.864-18.315a3.15 3.15 0 00-.46-1.131 3.117 3.117 0 00-1.968-1.34 3.062 3.062 0 00-1.21-.004C6.61 16.71 1 24.79.998 36.324l6.185-.002z" fill={color} />
    </svg>
  )
}
