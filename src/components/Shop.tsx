import React, { useState } from 'react';
import {TextInput,PasswordInput,Text,Table,Avatar,Container,
  Paper,Group,PaperProps,Button,Divider,Checkbox,Anchor,Space
} from '@mantine/core';
//import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';
interface ShopFormProps {
  elements: any[];
}

function ShopForm({ elements }: ShopFormProps) {
    
  /*let place = 0;
  const row = elements.map((element) => (
      <tr key={element.name}>          
          <td>{element.name}</td>          
      </tr>
  ))*/
  const row4 = (
    <tr>            
    <td>Preke</td>
    <td>Preke</td>
    <td>Preke</td>          
  </tr>)

const row3 = (
  <tr>            
  <td>Preke</td>
  <td>Preke</td>
  <td>Preke</td>          
</tr>)

const row2 = (
  <tr>            
  <td>Preke</td>
  <td>Preke</td>
  <td>Preke</td>          
</tr>)

const row1 = (
  <tr>            
  <td>Preke</td>
  <td>Preke</td>
  <td>Preke</td>          
</tr>)


  return (
      <Container style={{height:500, width:3000}}>
          
          <Text align='center' weight={700}>Store</Text>
          <Table>
              <thead>
                  <tr>
                      <th>Tier 4 Items</th>                      
                  </tr>
              </thead>
              <tbody>
                  {row4}
              </tbody>
              <thead>
                  <tr>
                      <th>Tier 3 Items</th>                      
                  </tr>
              </thead>
              <tbody>
                  {row3}
              </tbody>
              <thead>
                  <tr>
                      <th>Tier 2 Items</th>                      
                  </tr>
              </thead>
              <tbody>
                  {row2}
              </tbody>
              <thead>
                  <tr>
                      <th>Tier 1 Items</th>                      
                  </tr>
              </thead>
              <tbody>                
                {row1}                                                
              </tbody>
          </Table>
      </Container>
  );
}

export default ShopForm