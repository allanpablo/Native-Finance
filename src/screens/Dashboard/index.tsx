import React from "react";

import { Container, Header, UserInfo, Photo, User, UserGreeting, UserName, UserWrapper, Icon }  from './styles'

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri:'https://github.com/allanpablo.png'}}/>
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Allan Pablo</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>


      </Header>
    </Container>
  )
}
