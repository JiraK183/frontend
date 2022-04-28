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
import Inventory from './components/Inventory';
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

const mockShopItems = [
  {name: 'Gigachad', price: 25000, description: 'A popular meme depicting an alpha male', image: 'https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachad.jpg'},
  {name: 'Amogus', price: 16000, description: 'A meme that originated from the popular videogame "Among us"', image:'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/341c7d9ff8706a05919690ca33c2edd97c787322e3a0f8708b3b3a0ef7a013ca_1.jpg'},
  {name: 'Doge', price: 25000, description: 'A classic meme depicting a Shibe Inu breed dog', image:'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmobile%2F000%2F013%2F564%2Fdoge.jpg'},
  {name: 'Travis Scott aplogising', price: 8000, description: 'The awful apology video uploaded by Travis Scott where he supposedly apologises for the deaths in Astroworld concert', image:'https://cdn.shopify.com/s/files/1/0610/1680/1519/products/ScreenShot2021-11-22at11.59.26AM_1445x.png?v=1638213525'},
  {name: 'Ugandan Knucles', price: 4000, description: 'An old meme that depicts a horribly malformed character Knuckles from the "Sonic the hedgehog" franchise. The meme originated from players using the aforementioned character\'s model in a videogame "VR chat"', image:'https://play-lh.googleusercontent.com/Wug4uc-Hgv6Tkq7_IMaYod-cf7WdjSh3esPEA7I-aLtG9FP628XfWKZMA12SjKZ1D3w'}
]

const mockInventoryItems = [
  {name: 'Gigachad', price: 25000, description: 'A popular meme depicting an alpha male', image: 'https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachad.jpg'},
  {name: 'Doge', price: 25000, description: 'A classic meme depicting a Shibe Inu breed dog', image:'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmobile%2F000%2F013%2F564%2Fdoge.jpg'}
]

function App() {

  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [isInvIn, SetInvIn] = useState(false);
  const [isShopIn, SetShopIn] = useState(false);
  const [isLeadIn, SetLeadIn] = useState(false);
  const [coins, SetCoins] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  const [stats, SetStats] = useState('');
  const [actStories, SetActStories] = useState([]);
  const [complStories, SetComplStories] = useState([]);

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
      const response = await AppSvc.getStats();
      if(stats.toString().length === 0) {
        SetStats(response.data);
      }
    }
    fetchData();
  },[stats]);

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
      if(actStories.length === 0 && response.status !== 200 /*!== JSON.stringify(response.data.stories)*/) {
        SetActStories(response.data.stories);
      }
    }
    fetchData();
  },[actStories]);

  useEffect(() => {
    async function fetchData() {
      const response = await AppSvc.getCompletedTodayStories();
      if(complStories.length === 0/*!== JSON.stringify(response.data.stories)*/) {
        SetComplStories(response.data.stories);
      }
    }
    fetchData();
  },[complStories]);





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
              <Shop shopItems={mockShopItems} />
            </Container>
            : isInvIn ?
            <Container size='xl'>
              <Inventory InvItems={mockInventoryItems} />
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
                      <RewardsCard complTasks={complStories}/>
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
