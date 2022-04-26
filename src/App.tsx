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
import axios from 'axios';

const linkss = [
  { link: '', label: 'Home' },
  { link: '', label: 'Leaderboards' },
  { link: '', label: 'Store' },
]

function App() {

  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [isShopIn, SetShopIn] = useState(false);
  const [isLeadIn, SetLeadIn] = useState(false);
  const [coins, SetCoins] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  const [stats, SetStats] = useState({});
  const [actStories, setActStories] = useState([])

  useEffect(() =>{
    if(isLoggedIn){
      SetCoins(0);
      setLeaderboard([]);
    }
  },[isLoggedIn])

    useEffect(() => {
    async function fetchData() {
      const response = await AppSvc.getCoins();
      if(coins !== response.data.coins) {
        SetCoins(response.data.coins);
      }
    }
    fetchData();
  }, [coins]);

  useEffect(() => {
    async function fetchData() {
      const response = await AppSvc.getLeaderboard();
      if(JSON.stringify(leaderboard) !== JSON.stringify(response.data.leaderboard)) {
        setLeaderboard(response.data.leaderboard);
      }
    }
    fetchData();
  },[leaderboard]);

  useEffect(() => {
    async function fetchData() {
      const response = await AppSvc.getActiveStories();
      if(actStories.length === 0 /*!== JSON.stringify(response.data.stories)*/) {
        setActStories(response.data.stories);
      }
    }
    fetchData();
  },[actStories]);

  useEffect(() => {
    async function fetchData() {
      const response = await AppSvc.getStats();
      if(!JSON.stringify(stats) /* !== JSON.stringify(response.data)*/ ) {
        SetStats(response.data);
      }
    }
    fetchData();
  },[stats]);



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
        coins={coins}
        // userData={AppSvc.decodeUserInfoFromToken()}
      >
      </HeaderResponsive>

      <Container fluid={true}>

        {!isLoggedIn ? <Container size='xs'>
          <AuthenticationForm isLoggedIn={isLoggedIn} SetIsLoggedIn={SetIsLoggedIn}></AuthenticationForm>
        </Container>
          : isShopIn ?
            <Container size='xs'>
              <Shop elements={leaderboard} />
            </Container>
            : isLeadIn ?
              <Container size='xs'>
                <Leaderboard elements={leaderboard} />
              </Container>
              :
              <Container fluid style={{ flex: '' }}>

                <Container fluid>
                  <SimpleGrid spacing="xl" cols={3} breakpoints={[{ maxWidth: 'lg', cols: 1 }]}>
                    <Group direction="column">
                      <DailyCard />
                      <StatsCard stats={stats}/>
                    </Group>
                    <Group direction="column">
                      <RewardsCard />
                      <TasksCard tasks={actStories}/>
                    </Group>
                    <Leaderboard
                      elements={leaderboard}
                    />
                  </SimpleGrid>
                </Container>
              </Container>
        }
      </Container>

       {/*<FooterSimple
        links={linkss}
      ></FooterSimple> */}

    </MantineProvider>

  </div>
}
export default App;
