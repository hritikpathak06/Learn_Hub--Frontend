import React, { useState } from 'react';
import MetaData from '../../../Meta/MetaData';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';

const ForgetPassword = () => {
    const[email,setEmail] = useState('');
  return (
    <>
      <MetaData title={'Learn Hub || Forgot Your Password'} />
      <Container h={"100vh"} >
        <form >
          <Heading
            children="Forget Password"
            marginY={20}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          />
          <VStack spacing={8}>
            <Input
              required
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="Enter Your Email"
              type="email"
              focusBorderColor="orange.500"
            />
            <Button type='submit' width={"full"} colorScheme='orange'>Send Reset Link</Button>
          </VStack>
        </form>
      </Container>
    </>
  );
};

export default ForgetPassword;
