import React, { useState } from 'react';
import MetaData from '../../../Meta/MetaData';
import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#ECC94b',
  backgroundColor: '#fff',
};

const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState(null);

  //   Register Handler
  const registerHandler = event => {
    event.preventDefault();
    console.log('Form Submitted');
  };

  //   Image Handler
  const changeImageHandler = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  return (
    <>
      <MetaData title={'Learn Hub || Register To Enjoy The Courses'} />
      <Container h={'100vh'}>
        <VStack h={'full'} justifyContent={'center'} marginTop={['5rem', 0]}>
          <Heading children="Welcome To Learn Hub" />
          <form style={{ width: '100%' }} onSubmit={registerHandler}>
            <Box
              marginY={4}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Avatar size={'2xl'} src={imagePrev} />
            </Box>
            <Box marginY={'4'}>
              <FormLabel htmlFor="name" children="Your Name" />
              <Input
                required
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Enter Your Name"
                type="text"
                focusBorderColor="orange.500"
              />
            </Box>
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
            <Box marginY={'4'}>
              <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
              <Input
                accept="image/*"
                required
                id="chooseAvatar"
                type="file"
                focusBorderColor="orange.500"
                css={fileUploadStyle}
                onChange={changeImageHandler}
              />
            </Box>
            <Button
              marginY={'4'}
              colorScheme="orange"
              type="submit"
              width={['40%', '100%']}
            >
              Sign Up
            </Button>
            <Box marginY={'4'}>
              Already Have an account.. ??{' '}
              <NavLink to={'/login'}>
                <Button colorScheme="yellow" variant="link">
                  login
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

export default Register;
