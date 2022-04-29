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
          <Text align='center' weight={700}>Tier 1</Text>
      {itemsT1 && itemsT1.length > 0 ? <Grid>
        {itemsT1.map((item: any) => (
          <Grid.Col md={6} lg={4}><InventoryItemCard item={item} /></Grid.Col>
        ))}
      </Grid> : ''}
      
      <Text align='center' weight={700}>Tier 2</Text>
      {itemsT2 && itemsT2.length > 0? <Grid>
        {itemsT2.map((item: any) => (
          <Grid.Col md={6} lg={4}><InventoryItemCard item={item} /></Grid.Col>
        ))}
      </Grid>: ''}
      
      <Text align='center' weight={700}>Tier 3</Text>
      {itemsT3 && itemsT3.length > 0? <Grid>
        {itemsT3.map((item: any) => (
          <Grid.Col md={6} lg={4}><InventoryItemCard item={item} /></Grid.Col>
        ))}
      </Grid>: ''}
      <Text align='center' weight={700}>Tier 4</Text>
      <Grid>
        {itemsT4.map((item: any) => (
          <Grid.Col md={6} lg={4}><InventoryItemCard item={item} /></Grid.Col>
        ))}
      </Grid>
      </Container>
      </>
  );
}

export default InvForm