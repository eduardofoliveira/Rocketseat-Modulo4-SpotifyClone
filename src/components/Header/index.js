import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars2.githubusercontent.com/u/20446658?v=4" alt="Avatar" />
      Eduardo F Oliveira
    </User>
  </Container>
);

export default Header;
