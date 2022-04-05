import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderResponsive } from './components/shared/MainHeader';
import { FooterSimple } from './components/shared/Footer';
import DailyCard from './components/CardDaily';
import RewardsCard from './components/CardRewards';
import StatsCard from './components/CardStats';
import TasksCard from './components/CardTasks';
import LeaderBoardCard from './components/CardLeaderBoard';
import Leaderboard from './components/Leaderboard';

import { Grid, Button, Container, MantineProvider, SimpleGrid, Skeleton, useMantineTheme, Group } from '@mantine/core';
import AppSvc from './AppSvc';
import AuthenticationForm from './components/auth/AuthForm';

const linkss = [
  { link: '', label: 'Home' },
  { link: '', label: 'Leaderboards' },
  { link: '', label: 'Store' },
]

const lboardEls = [
  { name: 'Test', coins: '123' },
  { name: 'Test', coins: '123' },
  { name: 'Test', coins: '123' },
]

function App() {

  const [isLoggedIn, SetIsLoggedIn] = useState(false);

  return <div>

    <MantineProvider theme={{
      colorScheme: 'dark',

    }}
      styles={{
        Container: {

        }
      }}
      withGlobalStyles
    >

      <HeaderResponsive
        links={linkss}
        isLoggedIn={isLoggedIn}
        SetIsLoggedIn={SetIsLoggedIn}
      >
      </HeaderResponsive>

      <Container fluid={true}>

        {!isLoggedIn ? <Container size='xs'>
          <AuthenticationForm isLoggedIn={isLoggedIn} SetIsLoggedIn={SetIsLoggedIn}></AuthenticationForm>
        </Container>
          :
          <Container fluid>

            <Container size='md'>
              <Grid >
              <Grid.Col style={{ maxWidth: 400 }} md={12} lg={6} xl={6}>
                <DailyCard />
              </Grid.Col>
              <Grid.Col style={{ maxWidth: 400 }} md={12} lg={6} xl={6}>
                <StatsCard />
              </Grid.Col>
              <Grid.Col style={{ maxWidth: 400 }} md={12} lg={6} xl={6}>
                <RewardsCard />
              </Grid.Col>
              <Grid.Col style={{ maxWidth: 400 }} md={12} lg={6} xl={6}>
                <TasksCard />
              </Grid.Col>
            </Grid>
            </Container>


            <Container size='xs' style={{float:'right', position:'relative', top:'-500px', left:'-200px' }}>
              <Leaderboard
                elements={lboardEls}

              />
            </Container>



          </Container>

        }

      </Container>

      <FooterSimple
        links={linkss}
      ></FooterSimple>

    </MantineProvider>

  </div>
}
export default App;
