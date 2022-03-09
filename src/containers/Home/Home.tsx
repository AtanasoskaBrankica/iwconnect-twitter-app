import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import {Search} from '../Search/Search';
import {Main} from './components/Main/Main';

export const Home = () => {
  return (
    <div className="row">
      <NavBar />
      <Main />
      <Search />
    </div>
  );
};
