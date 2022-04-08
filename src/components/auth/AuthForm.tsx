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
import AppSvc from '../../AppSvc';
//import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';
interface AuthFormProps {
  isLoggedIn: boolean;
  SetIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function AuthenticationForm ({isLoggedIn, SetIsLoggedIn}: AuthFormProps) {
  const [address, setAddress] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function logIn() {
    // if(address && username && password){
      const response = await AppSvc.getAuthToken(address,username,password);
      if(response) {
        AppSvc.saveTokenInLS(response.data);
        SetIsLoggedIn(true);
      } else {
        alert('Wrong credentials');
      }

    // }
  }

  return (
    <Paper radius="md" p="xl" withBorder >
      <Text size="lg" weight={500}>
        Welcome, login with
      </Text>

      <Divider sx={{ marginBottom: '10px' }} />

      <TextInput
        placeholder="JIRA address"
        label="JIRA address"
        description="e.g. k183.atlassian.net"
        defaultValue={'k183.atlassian.net'}
        size="md"
        required
        value={address}
        onChange={(event) => setAddress(event.currentTarget.value)}
      />

      <Space h="xs" />

      <TextInput
        placeholder="Username"
        label="Username"
        description="Atlassian email"
        size="md"
        required
        value={username}
        onChange={(event) => setUserName(event.currentTarget.value)}
      />

      <Space h="xs" />

      <PasswordInput
        placeholder="API Key"
        label="API Key"
        description="JIRA Access API Key"
        size="md"
        required
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />

      <Space h="md" />


      <Button onClick={() => logIn()}
      color=''
      size='md'>
        Log In
      </Button>

    </Paper>
  );
}

export default AuthenticationForm