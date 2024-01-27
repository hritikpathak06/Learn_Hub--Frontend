import React, { useRef, useState } from 'react';
import MetaData from '../../Meta/MetaData';
import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';

const Request = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const submitMessageHandler = event => {
    event.preventDefault();
    console.log('Message Sent Successfully');
  };

  return (
    <>
      <MetaData title={'Learn Hub || Request A Course'} />
      <Container h={'100vh'}>
        <VStack h={'full'} justifyContent={'center'}>
          <Heading children="Request New Course" textTransform={'uppercase'} />
          <form
            style={{ width: '100%' }}
            ref={form}
            onSubmit={submitMessageHandler}
          >
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
              <FormLabel htmlFor="message" children="Your Course" />
              <Textarea
                required
                id="message"
                value={message}
                onChange={event => setMessage(event.target.value)}
                placeholder="Write Course Details"
                type="text"
                focusBorderColor="orange.500"
                resize={'none'}
              />
            </Box>
            <Button
              marginY={'4'}
              colorScheme="orange"
              type="submit"
              width={['40%', '100%']}
            >
              Send Request
            </Button>
          </form>
        </VStack>
      </Container>
    </>
  );
};

export default Request;
