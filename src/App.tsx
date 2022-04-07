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
import Shop from './components/Shop';
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
  { user: 'Test', coins: '123' },
  { user: 'Test', coins: '123' },
  { user: 'Test', coins: '123' },
]

function App() {

  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [isShopIn, SetShopIn] = useState(false);
  const [isLeadIn, SetLeadIn] = useState(false);

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
        isShopIn={isShopIn}
        SetShopIn={SetShopIn}
        isLeadIn={isLeadIn}
        SetLeadIn={SetLeadIn}
      >
      </HeaderResponsive>

      <Container fluid={true}>

        {!isLoggedIn ? <Container size='xs'>
          <AuthenticationForm isLoggedIn={isLoggedIn} SetIsLoggedIn={SetIsLoggedIn}></AuthenticationForm>
        </Container>                 
          :isShopIn ?
          <Container size='xs'>
        <Shop/> 
        </Container> 
          :isLeadIn ?
          <Container size='xs'>
        <Leaderboard elements={lboardEls}/> 
        </Container>
          :          
          <Container fluid style={{flex:''}}>
            
            <Container>
      <SimpleGrid spacing="xl" cols={3} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        <Group direction="column">
        <DailyCard/>
        <StatsCard />
        </Group>
        <Group direction="column">
        <RewardsCard />
        <TasksCard />
        </Group>
        <Leaderboard
                elements={lboardEls}
              />
      </SimpleGrid>
    </Container>
{/*
            <Container size='xl'>
              <Grid columns={12} align='stretch'>
              <Grid.Col span={6}>
              <DailyCard/>
              </Grid.Col>            
              <Grid.Col span={6}>
                <StatsCard />
              </Grid.Col>
              <Grid.Col span={6}>
                <RewardsCard />
              </Grid.Col>
              <Grid.Col span={6}>
                <TasksCard />
              </Grid.Col>
            </Grid>
            </Container>
            <Container size='xs' style={{float:'right', position:'relative', top:'-500px' }}>
              <Leaderboard
                elements={lboardEls}
              />
            </Container>
        */}
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
