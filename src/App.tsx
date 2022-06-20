import React, { useEffect, useState } from 'react';
import './App.css';
import { HeaderResponsive } from './components/shared/MainHeader';
import DailyCard from './components/CardDaily';
import RewardsCard from './components/CardRewards';
import StatsCard from './components/CardStats';
import TasksCard from './components/CardTasks';
import Shop from './components/shop/Shop';
import Inventory from './components/inventory/Inventory';
import Leaderboard from './components/Leaderboard';

import { Grid, Button, Container, MantineProvider, SimpleGrid, Skeleton, useMantineTheme, Group } from '@mantine/core';
import AppSvc from './AppSvc';
import AuthenticationForm from './components/auth/AuthForm';

const linkss = [
  { link: '', label: 'Home' },
  { link: '', label: 'Leaderboards' },
  { link: '', label: 'Store' },
]


function App() {

  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [isInvIn, SetInvIn] = useState(false);
  const [isShopIn, SetShopIn] = useState(false);
  const [isLeadIn, SetLeadIn] = useState(false);
  const [coins, SetCoins] = useState(-1);
  const [leaderboard, setLeaderboard] = useState([]);
  const [stats, SetStats] = useState('');
  const [isStatsLoading, setStatsLoading] = useState(true);
  const [actStories, SetActStories] = useState([]);
  const [isActStoriesLoading, SetActStoriesLoading] = useState(true);
  const [complStories, SetComplStories] = useState([]);
  const [isComplStoriesLoading, setComplStoriesLoading] = useState(true);
  const [shopItems, SetShopItems] = useState([]);
  const [isShopItemsLoading, SetShopItemsLoading] = useState(true);
  const [userItems, SetUserItems] = useState([]);
  const [currentUser, SetCurrentUser] = useState('');

  useEffect(() => {
    let tempLogin = false;
    if (!isLoggedIn) {
      const token = AppSvc.getToken();
      if (token && token !== null) {
        SetIsLoggedIn(true);
        tempLogin = true;
      }
    }

    if (isLoggedIn || tempLogin) {
      SetCoins(-1);
      setLeaderboard([]);
    }
  }, [isLoggedIn])

  useEffect(() => {
    async function fetchData() {

      const getCoinsResponse = await AppSvc.getCoins();
      SetCoins(getCoinsResponse.data.coins);

      const getStatsResponse = await AppSvc.getStats();
      if (coins !== getStatsResponse.data) {
          SetStats(getStatsResponse.data);
          setStatsLoading(false);
      }

      const getLeaderboardResponse = await AppSvc.getLeaderboard();
      if (JSON.stringify(leaderboard) !== JSON.stringify(getLeaderboardResponse.data.leaderboard)) {
        setLeaderboard(getLeaderboardResponse.data.leaderboard);
      }

      const getActiveStoriesResponse = await AppSvc.getActiveStories();
      SetActStories(getActiveStoriesResponse.data.stories);
      SetActStoriesLoading(false);

      const getCompletedTodayStoriesResponse = await AppSvc.getCompletedTodayStories();
      if (complStories.length === 0 && getCompletedTodayStoriesResponse.status === 200) {
        SetComplStories(getCompletedTodayStoriesResponse.data.stories);
        setComplStoriesLoading(false);

      }

      const getMyItemsResponse = await AppSvc.getMyItems();
      if (userItems.length === 0) {
        SetUserItems(getMyItemsResponse.data.products);
      }

      const getShopItemsResponse = await AppSvc.getShopItems();
      SetShopItems(getShopItemsResponse.data.products);
      SetShopItemsLoading(false);

      const decodeUserInfoFromTokenResponse = await AppSvc.decodeUserInfoFromToken();
      if (!currentUser) {
        SetCurrentUser(decodeUserInfoFromTokenResponse);
      }
    }
    fetchData();
  }, []);

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
        isInvIn={isInvIn}
        SetInvIn={SetInvIn}
      // userData={AppSvc.decodeUserInfoFromToken()}
      >
      </HeaderResponsive>

      <Container fluid={true}>

        {!isLoggedIn ? <Container size='xs'>
          <AuthenticationForm isLoggedIn={isLoggedIn} SetIsLoggedIn={SetIsLoggedIn}></AuthenticationForm>
        </Container>
          : isShopIn ?
            <Container size='xl'>
              <Shop shopItems={shopItems} isLoading={isShopItemsLoading} currentUser={currentUser} />
            </Container>
            : isInvIn ?
              <Container size='xl'>
                <Inventory InvItems={userItems ? userItems : []} />
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
                        <DailyCard complTasks={complStories} isLoading={isComplStoriesLoading} />
                        <StatsCard stats={stats} isLoading={isStatsLoading} />
                      </Group>
                      <Group direction="column">
                        <RewardsCard complTasks={complStories} isLoading={isComplStoriesLoading} />
                        <TasksCard tasks={actStories} isLoading={isActStoriesLoading} />
                      </Group>
                      <Leaderboard
                        elements={leaderboard}
                      />
                    </SimpleGrid>
                  </Container>
                </Container>
        }
      </Container>
    </MantineProvider>

  </div>
}
export default App;
