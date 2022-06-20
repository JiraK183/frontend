import React, { useState } from 'react';
import {
  TextInput, PasswordInput, Text, Table, Avatar, Container,
  Paper, Group, PaperProps, Button, Divider, Checkbox, Anchor, Space, Grid, Modal
} from '@mantine/core';
import ShopItemCard from './CardShopItem';
import CreateShopItem from './CreateShopItem';
import { MoonLoader } from 'react-spinners';
//import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';
interface ShopFormProps {
  shopItems: any[];
  isLoading: boolean;
  currentUser: string;
  userCoins?: number;
}

function ShopForm({shopItems, isLoading, currentUser, userCoins}:ShopFormProps) {

  let isAdmin = false;
  if (currentUser) {
    const userData = JSON.parse(currentUser);
    isAdmin = Object.values(userData.roles).includes('admin');
  }

  const [createItemOpened, SetCreateItemOpened] = useState(false);

  const itemsT1 = shopItems.filter((item) => item.price >= 25000);
  const itemsT2 = shopItems.filter((item) => item.price < 25000 && item.price >= 16000);
  const itemsT3 = shopItems.filter((item) => item.price < 16000 && item.price >= 8000);
  const itemsT4 = shopItems.filter((item) => item.price < 8000);  

  return (
    <Container fluid={true}>
      <Modal opened={createItemOpened}
      onClose={() => SetCreateItemOpened(false)}
      title={"Create shop item"}      
      >
        <CreateShopItem setModalState={SetCreateItemOpened} />       
      </Modal>

      {isAdmin? <Button color={'green'} onClick={() => SetCreateItemOpened(true)}>Add new item</Button> : '' }

      <Text align='center' weight={700} size={"xl"}>Store</Text>
      {!isLoading? 
      <div>
      <Text align='center' weight={700}>Tier 1</Text>
      {itemsT1 && itemsT1.length > 0 ? <Grid>
      {itemsT1.map((item: any) => (
        <Grid.Col md={6} lg={4}><ShopItemCard item={item} showAdminOptions={isAdmin} userCoins={userCoins} /></Grid.Col>
      ))}
    </Grid> : ''}
    
    <Text align='center' weight={700}>Tier 2</Text>
    {itemsT2 && itemsT2.length > 0? <Grid>
      {itemsT2.map((item: any) => (
        <Grid.Col md={6} lg={4}><ShopItemCard item={item} showAdminOptions={isAdmin} userCoins={userCoins}/></Grid.Col>
      ))}
    </Grid>: ''}
    
    <Text align='center' weight={700}>Tier 3</Text>
    {itemsT3 && itemsT3.length > 0? <Grid>
      {itemsT3.map((item: any) => (
        <Grid.Col md={6} lg={4}><ShopItemCard item={item} showAdminOptions={isAdmin} userCoins={userCoins}/></Grid.Col>
      ))}
    </Grid>: ''}
    <Text align='center' weight={700}>Tier 4</Text>
    <Grid>
      {itemsT4.map((item: any) => (
        <Grid.Col md={6} lg={4}><ShopItemCard item={item} showAdminOptions={isAdmin} userCoins={userCoins}/></Grid.Col>
      ))}
    </Grid>
    </div> 
    :
    <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', textAlign: 'left', marginTop: '30px' }}>
              <MoonLoader size={150} speedMultiplier={0.75} color={'gray'}></MoonLoader>
          </div>
      </div>}
      
    </Container>
  );
}

export default ShopForm