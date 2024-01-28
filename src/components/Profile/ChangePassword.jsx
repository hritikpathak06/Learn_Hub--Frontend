import React, { useState } from 'react';
import MetaData from '../../Meta/MetaData';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Change Password Handler
  const changePasswordHandler = event => {
    event.preventDefault();
  };

  return (
    <>
      <MetaData title={'Learn Hub || Change Your Learn Hub Password'} />
      <Container py={16} minH={'100vh'}>
        <form onSubmit={changePasswordHandler}>
          <Heading
            children="Change Your Password"
            my={16}
            textAlign={['center', 'left']}
            textTransform={'uppercase'}
          />
          <VStack spacing={8}>
            <Input
              required
              value={oldPassword}
              onChange={event => setOldPassword(event.target.value)}
              placeholder="Enter old Password"
              type="password"
              focusBorderColor="orange.500"
            />
            <Input
              required
              value={newPassword}
              onChange={event => setNewPassword(event.target.value)}
              placeholder="Enter New Password"
              type="password"
              focusBorderColor="orange.500"
            />
            <Button colorScheme="orange" width={'full'} type="submit">
              Change Password
            </Button>
          </VStack>
        </form>
      </Container>
    </>
  );
};

export default ChangePassword;
