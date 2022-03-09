import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faHashtag} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faCircleChevronDown} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from '../../components/NavLink/NavLink';
import Button from '../../components/Button/Button';

export const NavBar = () => {
  return (
    <Styled.Container className="col-3">
      <NavLink
        text="Home"
        icon={<FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>}
      />
      <NavLink
        text="Explore"
        icon={<FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon>}
      />
      <NavLink
        text="Notifications"
        icon={<FontAwesomeIcon icon={faBell}></FontAwesomeIcon>}
      />
      <NavLink
        text="Messages"
        icon={<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>}
      />
      <NavLink
        text="Bookmarks"
        icon={<FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>}
      />
      <NavLink
        text="Lists"
        icon={<FontAwesomeIcon icon={faList}></FontAwesomeIcon>}
      />
      <NavLink
        text="Profile"
        icon={<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}
      />
      <NavLink
        text="More"
        icon={<FontAwesomeIcon icon={faCircleChevronDown}></FontAwesomeIcon>}
      />
      <Button name="Tweet" backgroundColor="#26a7de" textColor="white"></Button>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.nav`
    background: black;
    height: 100vh;
    borderright: '1px solid white';
  `,
};
