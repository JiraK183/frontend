import React, { useState } from 'react';
import {TextInput,PasswordInput,Text,Table,Avatar,Container,
  Paper,Group,PaperProps,Button,Divider,Checkbox,Anchor,Space,Grid
} from '@mantine/core';
import ShopItemCard from './CardShopItem';
//import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';
interface ShopFormProps {
  shopItems: any;
}

function ShopForm({ shopItems }: ShopFormProps) {
    
const itemsT1 = shopItems.filter((item: any) => item.price >= 25000)
const itemsT2 = shopItems.filter((item: any) => item.price < 25000 && item.price >= 16000)
const itemsT3 = shopItems.filter((item: any) => item.price < 16000 && item.price >= 8000)
const itemsT4 = shopItems.filter((item: any) => item.price < 8000)

  return (
      <Container fluid={true}>
          
          <Text align='center' weight={700} size={"xl"}>Store</Text>
          <Text align='center' weight={700}>Tier 1</Text>
          <Grid>
            {itemsT1.map((item: any) => (
            <Grid.Col md={6} lg={4}><ShopItemCard stats={item}/></Grid.Col>
          ))}
          </Grid>
          <Text align='center' weight={700}>Tier 2</Text>
          <Grid>
            {itemsT2.map((item: any) => (
            <Grid.Col md={6} lg={4}><ShopItemCard stats={item}/></Grid.Col>
          ))}
          </Grid>
          <Text align='center' weight={700}>Tier 3</Text>
          <Grid>
            {itemsT3.map((item: any) => (
            <Grid.Col md={6} lg={4}><ShopItemCard stats={item}/></Grid.Col>
          ))}
          </Grid>
          <Text align='center' weight={700}>Tier 4</Text>
          <Grid>
            {itemsT4.map((item: any) => (
            <Grid.Col md={6} lg={4}><ShopItemCard stats={item}/></Grid.Col>
          ))}
          </Grid>
      </Container>
  );
}

export default ShopForm