import React from 'react';
import './App.css';
import './Components.css';
import logo from './img/logo.png';
import userImage from './img/user.jpg';

const App = () => {
  return (
    <div className='container'>
      <header className='header'>
        <img src={logo} alt='Trillo Logo' className='logo' />

        <form action='#' className='search'>
          <input
            type='text'
            placeholder='Search Hotels'
            className='search__input'
          />
          <button className='search__button'>
            <div className='search__icon'>
              <i className='fas fa-search'></i>
            </div>
          </button>
        </form>

        <nav className='user-nav'>
          <div className='user-nav__icon-box'>
            <div className='user-nav__icon'>
              <i className='fas fa-ribbon'></i>
            </div>
            <span className='user-nav__notification'>7</span>
          </div>
          <div className='user-nav__icon-box'>
            <div className='user-nav__icon'>
              <i className='fas fa-comments'></i>
            </div>
            <span className='user-nav__notification'>13</span>
          </div>
          <div className='user-nav__user'>
            <img
              src={userImage}
              alt='User photo'
              className='user-nav__user-photo'
            />
            <span className='user-nav__user-name'>Jonas</span>
          </div>
        </nav>
      </header>
      <div className='content'>
        <nav className='sidebar'>Nav</nav>
        <main className='hotel-view'>Hotel View</main>
      </div>
    </div>
  );
};

export default App;
