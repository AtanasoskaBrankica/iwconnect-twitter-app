import React from 'react';
import {Main} from './components/Main';
import {NavBar} from './components/NavBar';
import {Search} from './components/Search';

export const Home = () => {
  return (
    <div className="row">
      <NavBar />
      <Main />
      <Search />
    </div>
  );
};
