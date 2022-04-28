import React, { useState } from 'react';
import {TextInput,PasswordInput,Text,Table,Avatar,Container,
  Paper,Group,PaperProps,Button,Divider,Checkbox,Anchor,Space,Grid
} from '@mantine/core';
import InventoryItemCard from './CardInventoryItem';
//import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';
interface InvFormProps {
  InvItems: any;
}

function InvForm({ InvItems }: InvFormProps) {
    
const itemsT1 = InvItems.filter((item: any) => item.price >= 25000)
const itemsT2 = InvItems.filter((item: any) => item.price < 25000 && item.price >= 16000)
const itemsT3 = InvItems.filter((item: any) => item.price < 16000 && item.price >= 8000)
const itemsT4 = InvItems.filter((item: any) => item.price < 8000)

  return (
      <>
      <Container fluid={true}>
          
          <Text align='center' weight={700} size={"xl"}>Inventory</Text>          
          <Grid>
            {itemsT1.map((item: any) => (
            <Grid.Col md={6} lg={4}><InventoryItemCard stats={item}/></Grid.Col>
          ))}
          </Grid>         
          <Grid>
            {itemsT2.map((item: any) => (
            <Grid.Col md={6} lg={4}><InventoryItemCard stats={item}/></Grid.Col>
          ))}
          </Grid>
          <Grid>
            {itemsT3.map((item: any) => (
            <Grid.Col md={6} lg={4}><InventoryItemCard stats={item}/></Grid.Col>
          ))}
          </Grid>
          <Grid>
            {itemsT4.map((item: any) => (
            <Grid.Col md={6} lg={4}><InventoryItemCard stats={item}/></Grid.Col>
          ))}
          </Grid>
      </Container>
      </>
  );
}

export default InvForm