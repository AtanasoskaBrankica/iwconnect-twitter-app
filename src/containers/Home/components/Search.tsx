import React from 'react';
import styled from 'styled-components';
import {PeopleToFollow} from '../../../components/PeopleToFollow/PeopleToFollow';
import {ShowMore} from '../../../components/ShowMore/ShowMore';
import {TitleTopic} from '../../../components/TitleTopic/TitleTopic';
import {Topic} from '../../../components/Topic/Topic';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGear} from '@fortawesome/free-solid-svg-icons';

export const Search = () => {
  return (
    <Styled.Container className="col-3">
      <Styled.WrapperOne>
        <TitleTopic
          title="Topics for you"
          icon={<FontAwesomeIcon icon={faGear}></FontAwesomeIcon>}
        />
        <Topic
          description="Trending in USA"
          title="#RejectedAmazonPrimeBenefits"
          number="1,070 Tweets"
        />
        <Topic
          description="Trending in USA"
          title="#ScamBlockParty"
          number="2,108 Tweets"
        />
        <Topic
          description="Trending in USA"
          title="#PrimeDayStrike"
          number="4,391 Tweets"
        />
        <Topic
          description="Trending in USA"
          title="#SocialMediaSlavery"
          number="6,074 Tweets"
        />
        <ShowMore desc="Show more" />
      </Styled.WrapperOne>
      <Styled.WrapperTwo>
        <TitleTopic title="Who to follow" />
        <PeopleToFollow
          image="https://pbs.twimg.com/profile_images/2603385053/z3vshj4j0mramy79mwh3_400x400.jpeg"
          name="Liv Tyler"
          username="@Liv Tyler"
        ></PeopleToFollow>
        <PeopleToFollow
          image="https://pbs.twimg.com/media/DuKgOafW4AMEdh0.jpg"
          name="Nia Long"
          username="@NiaLong"
        ></PeopleToFollow>
        <PeopleToFollow
          image="https://pbs.twimg.com/profile_images/756279081/al_pac_1_400x400.jpg"
          name="Al Pacino"
          username="@AlPacino"
        ></PeopleToFollow>
        <ShowMore desc="Show more" />
      </Styled.WrapperTwo>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.aside`
    background: black;
    height: 100vh;
  `,
  WrapperOne: styled.div`
    background: #141f27;
    height: 50vh;
    margin-bottom: 20px;
    margin-top: 20px;
    border-radius: 20px;
  `,
  WrapperTwo: styled.div`
    background: #141f27;
    border-radius: 20px;
    height: 35vh;
  `,
};
