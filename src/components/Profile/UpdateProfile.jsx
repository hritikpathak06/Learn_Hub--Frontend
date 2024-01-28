import React, { useState } from 'react';
import MetaData from '../../Meta/MetaData';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Change Password Handler
  const UpdateProfileHandler = event => {
    event.preventDefault();
  };

  return (
    <>
      <MetaData title={'Learn Hub || Update Your Learn Hub Profile'} />
      <Container py={16} minH={'100vh'}>
        <form onSubmit={UpdateProfileHandler}>
          <Heading
            children="Update Your Profile"
            my={16}
            textAlign={['center', 'left']}
            textTransform={'uppercase'}
          />
          <VStack spacing={8}>
            <Input
              value={name}
              onChange={event => setName(event.target.value)}
              placeholder="Enter Your Name"
              type="text"
              focusBorderColor="orange.500"
            />
            <Input
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="Enter Your Email"
              type="email"
              focusBorderColor="orange.500"
            />
            <Button colorScheme="orange" width={'full'} type="submit">
              Update Profile
            </Button>
          </VStack>
        </form>
      </Container>
    </>
  );
};

export default UpdateProfile;
