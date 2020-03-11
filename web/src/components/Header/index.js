import React from 'react';
import { Link } from 'react-router-dom';
import { MdExitToApp } from 'react-icons/md';

import logo from '~/assets/logo-purple.svg';
import Notifications from '~/components/Notifications';

import { Container, Content, Profile, ExitFromApp } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Renato</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Renato"
            />
          </Profile>
          <ExitFromApp>
            <MdExitToApp color="#5b5393" size={20} />
          </ExitFromApp>
        </aside>
      </Content>
    </Container>
  );
}
