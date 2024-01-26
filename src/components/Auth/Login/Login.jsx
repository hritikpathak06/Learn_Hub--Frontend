import React, { useState } from 'react';
import MetaData from '../../../Meta/MetaData';
import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   Login Handler
  const loginHandler = event => {
    event.preventDefault();
    console.log('Form Submitted');
  };

  return (
    <>
      <MetaData title={'Learn Hub || Login To Enjoy The Courses'} />
      <Container h={'100vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={16}>
          <Heading children="Welcome Back To Learn Hub" />
          <form style={{ width: '100%' }} onSubmit={loginHandler}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Box marginY={'4'}>
              <Input
                required
                id="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Enter Your Email"
                type="email"
                focusBorderColor="orange.500"
              />
            </Box>
            <Box marginY={'4'}>
              <FormLabel htmlFor="password" children="Your Password" />
              <Input
                required
                id="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="Enter Your Password"
                type="password"
                focusBorderColor="orange.500"
              />
            </Box>
            <Box>
              <NavLink to={'/forgetPassword'}>
                <Button fontSize={'sm'} variant={'ghost'}>
                  Forget Password ..??
                </Button>
              </NavLink>
            </Box>
            <Button
              marginY={'4'}
              colorScheme="orange"
              type="submit"
              width={['40%', '100%']}
            >
              Log In
            </Button>
            <Box marginY={'4'}>
              New User ?{' '}
              <NavLink to={'/register'}>
                <Button colorScheme="yellow" variant="link">
                  register now
                </Button>{' '}
                here
              </NavLink>
            </Box>
          </form>
        </VStack>
      </Container>
    </>
  );
};

export default Login;
