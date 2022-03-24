import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderResponsive } from './components/MainHeader';
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';



function App() {
  //links: { link: string; label: string }[];
  const linkss=[
    {link:'1', label:'link1'},
    {link:'2', label:'link2'},
    {link:'3', label:'link3'},
  ]
  const gridHeight = 500;

  return (
    <div>
      <HeaderResponsive
        links={linkss}
      >
      </HeaderResponsive>asdasdsa

      <Container my="md">
        <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>

          <Skeleton height={gridHeight} radius="md" animate={false} />
          <Skeleton height={gridHeight} radius="md" animate={false} />
          <Skeleton height={gridHeight} radius="md" animate={false} />
          <Skeleton height={gridHeight} radius="md" animate={false} />
        </SimpleGrid>
           
      </Container>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Reacta
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
