import React, { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Paper, Transition, Button } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import UserInfoHeader from './UserInfoHeader';
import AppSvc from '../../AppSvc';
//import { MantineLogo } from '../../shared/MantineLogo';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '99%',
    maxWidth: 'none'
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));

interface HeaderResponsiveProps {
  children: never[];
  links: { link: string; label: string }[];
  isLoggedIn: boolean;
  SetIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isShopIn: boolean;
  SetShopIn: React.Dispatch<React.SetStateAction<boolean>>;
  isLeadIn: boolean;
  SetLeadIn: React.Dispatch<React.SetStateAction<boolean>>;
  coins: number;

}


export function HeaderResponsive({ links, isLoggedIn, SetIsLoggedIn, isShopIn, SetShopIn, isLeadIn, SetLeadIn, coins }: HeaderResponsiveProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  //when logout
  function Logout() {
    SetShopIn(false);
    SetLeadIn(false);

    AppSvc.removeToken();
    SetIsLoggedIn(false);

  }
  //when shop on
  function ShopOn() {
    SetShopIn(true);
    SetLeadIn(false);
  }
  //when leaderbord on
  function LeadOn() {
    SetLeadIn(true);
    SetShopIn(false);
  }
  //when home page on
  function HomeOn() {
    SetShopIn(false);
    SetLeadIn(false);
  }

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        toggleOpened(false);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={30} className={classes.root}>
      <Container className={classes.header}>
        {isLoggedIn ? <Container className={classes.header}>
          {/* <MantineLogo /> */}

          <Group spacing={10} className={classes.links}>
            {<Button onClick={HomeOn}
            > Home</Button>}
            {<Button onClick={ShopOn}
            > Store</Button>}
            {<Button onClick={LeadOn}
            > Leaderbord</Button>}
            {/*items*/}
          </Group>

          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />

          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>

          <Group position='right'>
            {/* temporary place to show coins */}
            <Button ml={5} radius={20} color={'yellow'}>{coins} JC</Button>
            <Button onClick={Logout}
            > Logout </Button>
          </Group>



        </Container>
          : null}
      </Container>
    </Header>
  );
}