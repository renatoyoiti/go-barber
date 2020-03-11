import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdExitToApp } from 'react-icons/md';

import logo from '~/assets/logo-purple.svg';
import Notifications from '~/components/Notifications';

import { Container, Content, Profile, ExitFromApp } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  console.tron.log(profile);

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
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                (profile.avatar && profile.avatar.url) ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
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
