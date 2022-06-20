import React, { useState } from 'react';
import {
  TextInput, PasswordInput, Text, Table, Avatar, Container,
  Paper, Group, PaperProps, Button, Divider, Checkbox, Anchor, Space, Grid
} from '@mantine/core';
import InventoryItemCard from './CardInventoryItem';
import { MoonLoader } from 'react-spinners';
//import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';
interface InvFormProps {
  InvItems: any;
  isLoading: boolean;
}

function InvForm({ InvItems, isLoading }: InvFormProps) {

  const itemsT1 = InvItems.filter((item: any) => item.price >= 25000)
  const itemsT2 = InvItems.filter((item: any) => item.price < 25000 && item.price >= 16000)
  const itemsT3 = InvItems.filter((item: any) => item.price < 16000 && item.price >= 8000)
  const itemsT4 = InvItems.filter((item: any) => item.price < 8000)

  return (
    <>
      <Container fluid={true}>

        <Text align='center' weight={700} size={"xl"}>Inventory</Text>
        {!isLoading ?
          <div>
            {itemsT1 && itemsT1.length > 0 ?
              <div>
                <Text align='center' weight={700}>Tier 1</Text>
                <Grid>
                  {itemsT1.map((item: any) => (
                    <Grid.Col md={6} lg={4}><InventoryItemCard item={item} /></Grid.Col>
                  ))}
                </Grid></div> : ''}

            {itemsT2 && itemsT2.length > 0 ? <div>
              <Text align='center' weight={700}>Tier 2</Text>
              <Grid>
                {itemsT2.map((item: any) => (
                  <Grid.Col md={6} lg={4}><InventoryItemCard item={item} /></Grid.Col>
                ))}
              </Grid>
            </div> : ''}

            {itemsT3 && itemsT3.length > 0 ? <div>
              <Text align='center' weight={700}>Tier 3</Text>
              <Grid>
                {itemsT3.map((item: any) => (
                  <Grid.Col md={6} lg={4}><InventoryItemCard item={item} /></Grid.Col>
                ))}
              </Grid></div> : ''}
              {itemsT4 && itemsT4.length > 0 ? <div>
              <Text align='center' weight={700}>Tier 4</Text>
              <Grid>
                {itemsT4.map((item: any) => (
                  <Grid.Col md={6} lg={4}><InventoryItemCard item={item} /></Grid.Col>
                ))}
              </Grid></div> : ''}
          </div>
          :
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', textAlign: 'left', marginTop: '30px' }}>
              <MoonLoader size={150} speedMultiplier={0.75} color={'gray'}></MoonLoader>
            </div>
          </div>}

      </Container>
    </>
  );
}

export default InvForm