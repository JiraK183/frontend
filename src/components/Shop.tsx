import React, { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Space,
} from '@mantine/core';
//import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';
interface ShopFormProps {
  isShopIn: boolean;
  SetShopIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShopForm () {

  return (
    <Paper radius="md" p="xl" withBorder >
      <Text size="lg" weight={500}>
        Welcome to a shop
      </Text>

      <Divider sx={{ marginBottom: '10px' }} />     
      <Space h="md" />      
    </Paper>
  );
}

export default ShopForm