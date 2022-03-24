import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderResponsive } from './components/MainHeader';
import { Button, Container, MantineProvider, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';



function App() {
  //links: { link: string; label: string }[];
  const linkss=[
    {link:'', label:'Home'},
    {link:'', label:'Leaderboards'},
    {link:'', label:'Store'},
  ]
  const gridHeight = 500;

  return (
    <div style={{backgroundColor:'gray'}}>

      <MantineProvider theme={{
      colorScheme:'dark',
      
      
    }}>
      <HeaderResponsive
        links={linkss}
      >
      </HeaderResponsive>

      <Container>
        <SimpleGrid cols={2} breakpoints={[{maxWidth:'md', cols: 1 }]}>
     
          <Skeleton height={gridHeight} radius="md" animate={false} >
            <Button>sw</Button>
          </Skeleton>

          <Skeleton height={gridHeight} radius="md" animate={false} />
          <Skeleton height={gridHeight} radius="md" animate={false} />
          <Skeleton height={gridHeight} radius="md" animate={false} />
        </SimpleGrid>
           
      </Container>
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
      colorScheme:'dark'
    }}>
      <App />
    </MantineProvider>
  );
}

export default App;
