import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button/Button';

import {NavLink} from '../../../components/NavLink/NavLink';

export const NavBar = () => {
  return (
    <Styled.Container className="col-3">
      <NavLink text="Home" icon={<i className="fa-solid fa-house"></i>} />
      <NavLink text="Explore" icon={<i className="fa-solid fa-hashtag"></i>} />
      <NavLink
        text="Notifications"
        icon={<i className="fa-solid fa-bell"></i>}
      />
      <NavLink
        text="Messages"
        icon={<i className="fa-solid fa-envelope"></i>}
      />
      <NavLink
        text="Bookmarks"
        icon={<i className="fa-solid fa-bookmark"></i>}
      />
      <NavLink text="Lists" icon={<i className="fa-solid fa-list"></i>} />
      <NavLink text="Profile" icon={<i className="fa-solid fa-user"></i>} />
      <NavLink
        text="More"
        icon={<i className="fa-solid fa-circle-chevron-down"></i>}
      />
      <Button name="Tweet" backgroundColor="#26a7de" textColor="white"></Button>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.nav`
    background: black;
    height: 100vh;
  `,
};
