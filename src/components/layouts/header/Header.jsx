import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../button/Button';
import { useAuth } from '../../../contexts/auth-context';

const menuLinks = [
   {
      url: '/',
      title: 'home',
   },
   {
      url: '/blog',
      title: 'blog',
   },
   {
      url: '/about',
      title: 'About',
   },
   {
      url: '/contact',
      title: 'Contact',
   },
];

const HeaderStyle = styled.header`
   padding: 40px 0;
   .header-main {
      display: flex;
      align-items: center;
   }
   .logo {
      max-width: 50px;
      display: block;
   }
   .menu {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-left: 40px;
      text-transform: capitalize;
      list-style-type: none;
      .menu-link {
         font-weight: 500;
      }
   }
   .search {
      margin-left: auto;
      max-width: 320px;
      width: 100%;
      border: 1px solid #ece;
      border-radius: 10px;
      padding: 8px;
      display: flex;
      align-items: center;
      position: relative;
      .search-input {
         flex: 1;
         padding-right: 45px;
      }
      .search-icon {
         position: absolute;
         top: 50%;
         transform: translateY(-50%);
         right: 20px;
         svg {
            height: 20px;
            width: 20px;
         }
      }
   }
   .header-auth,
   .header-button {
      margin-left: 20px;
   }
`;

const getLastName = (name) => {
   if (!name) return '';
   const result = name.split(' ');
   return result[result.length - 1] || result;
};

const Header = () => {
   const { userInfo } = useAuth();
   return (
      <HeaderStyle>
         <div className="container">
            <div className="header-main">
               <Link to={'/'}>
                  <img
                     srcSet="/assets/images/logo/monkey1.png"
                     alt="logo monkey blogging"
                     className="logo"
                  />
               </Link>
               <ul className="menu">
                  {menuLinks &&
                     menuLinks.length > 0 &&
                     menuLinks.map((menuLink) => (
                        <li className="menu-item" key={menuLink.title}>
                           <NavLink to={menuLink.url} className="menu-link">
                              {menuLink.title}
                           </NavLink>
                        </li>
                     ))}
               </ul>
               <div className="search">
                  <input
                     type="search"
                     name="search"
                     id="search"
                     placeholder="Search posts..."
                     className="search-input"
                  />
                  <span className="search-icon">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                     </svg>
                  </span>
               </div>
               {!userInfo ? (
                  <Button
                     type="button"
                     style={{ maxWidth: '160px' }}
                     height="42px"
                     className="header-button"
                     to="/sign-in"
                  >
                     Sign In
                  </Button>
               ) : (
                  <div className="header-auth">
                     <span>Welcome back,</span>
                     <strong className="text-primary">
                        {getLastName(userInfo?.displayName)}
                     </strong>
                  </div>
               )}
            </div>
         </div>
      </HeaderStyle>
   );
};

export default Header;
