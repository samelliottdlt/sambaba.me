import React from 'react';
import {Link} from 'react-router-dom';

import styled from '../theme';

const links = [
  ['LinkedIn', 'https://www.linkedin.com/in/samelliott7c7/'],
  ['GitHub', 'https://github.com/samelliottdlt'],
  ['AngelList', 'https://angel.co/samelliottdlt'],
  ['Twitter', 'https://twitter.com/sam___elliott'],
];

const SocialMediaLink = styled.a`
  display: inline-block;
  margin: 0 15px;
  text-decoration: none;
  &:hover {
    color: white;
    background-color: #94D0FF;
  }
`;

const SocialMediaLinksContainer = styled.div`
  text-align: center;
  margin-top: 1.5em;
  font-size: 1.5em;
`;

const colors = ['#FF6AD5', '#AD8CFF', '#94D0FF'];

const Bar = styled.div`
  height: 5px;
  font-size: 0;
  background: linear-gradient(to right, ${colors.join(',')});
`;

const Description = styled.div`
  margin-top: 0.5em;
  font-size: 2em;
  text-align: center;
  color: #666;
`;

export default () => (
  <>
    <Bar />
    <Description>
      Hello! I'm Sam Elliott.
    </Description>
    <SocialMediaLinksContainer>
      {links.map(([text, link]) => <SocialMediaLink href={link} key={text}>{text}</SocialMediaLink>)}
    </SocialMediaLinksContainer>
    <Description>
      Stuff
      <div>
        <Link to='/pixelart'>Pixel Art</Link>
      </div>
    </Description>
  </>
);
