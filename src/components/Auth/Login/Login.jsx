import React, { useEffect, useState } from 'react';
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
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/actions/userAction';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, message, error } = useSelector(state => state.user);

  //   Login Handler
  const loginHandler = event => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
    if (message) {
      toast.success(message);
    }
    if (error) {
      toast.error(error);
    }
  }, [isAuthenticated, message, error,navigate]);

  return (
    <>
      <MetaData title={'Learn Hub || Login To Enjoy The Courses'} />
      <Container h={'100vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={16}>
          <Heading children="Welcome Back To Learn Hub" />
          <form style={{ width: '100%' }} onSubmit={loginHandler}>
            <Box marginY={'4'}>
              <FormLabel htmlFor="email" children="Email Address" />
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
