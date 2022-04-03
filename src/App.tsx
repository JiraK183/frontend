import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderResponsive } from './components/MainHeader';
import { FooterSimple } from './components/Footer';
import DailyCard from './components/CardDaily';
import RewardsCard from './components/CardRewards';
import StatsCard from './components/CardStats';
import TasksCard from './components/CardTasks';
import LeaderBoardCard from './components/CardLeaderBoard';

import { Grid, Button, Container, MantineProvider, SimpleGrid, Skeleton, useMantineTheme, Group } from '@mantine/core';



function App() {
  //links: { link: string; label: string }[];
  const linkss = [
    { link: '', label: 'Home' },
    { link: '', label: 'Leaderboards' },
    { link: '', label: 'Store' },
  ]
  const gridHeight = 500;

  return (
    <div style={{ backgroundColor: 'gray' }}>

      <MantineProvider theme={{
        colorScheme: 'dark',


      }}>
        <HeaderResponsive
          links={linkss}
        >
        </HeaderResponsive>


        <Grid justify="space-around">
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




        <FooterSimple
          links={linkss}
        ></FooterSimple>
      </MantineProvider>

    </div>


    // <div>

    //   <HeaderResponsive
    //     links={linkss}
    //   >
    //   </HeaderResponsive>

    //   <Container>
    //     <SimpleGrid cols={2} breakpoints={[{maxWidth:'md', cols: 1 }]}>

    //       <Skeleton height={gridHeight} radius="md" animate={false} >
    //         <Button>sw</Button>
    //       </Skeleton>

    //       <Skeleton height={gridHeight} radius="md" animate={false} />
    //       <Skeleton height={gridHeight} radius="md" animate={false} />
    //       <Skeleton height={gridHeight} radius="md" animate={false} />
    //     </SimpleGrid>

    //   </Container>
    // </div>

  );
}

function WithProvider() {
  return (
    <MantineProvider theme={{
      colorScheme: 'dark'
    }}>
      <App />
    </MantineProvider>
  );
}

export default App;
