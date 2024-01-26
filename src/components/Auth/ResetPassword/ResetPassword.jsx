import React, { useState } from 'react';
import MetaData from '../../../Meta/MetaData';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const params = useParams();

  //   console.log("Token: ",params.token)

  return (
    <>
      <MetaData title={'Learn Hub || Forgot Your Password'} />
      <Container h={'100vh'}>
        <form>
          <Heading
            children="Reset Password"
            marginY={20}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          />
          <VStack spacing={8}>
            <Input
              required
              value={password}
              onChange={event => setPassword(event.target.value)}
              placeholder="Enter New Password"
              type="password"
              focusBorderColor="orange.500"
            />
            <Button type="submit" width={'full'} colorScheme="orange">
              Change Password
            </Button>
          </VStack>
        </form>
      </Container>
    </>
  );
};

export default ResetPassword;
