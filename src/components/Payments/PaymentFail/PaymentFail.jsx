import React from 'react';
import MetaData from '../../../Meta/MetaData';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { RiSignalWifiErrorLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <>
      <MetaData title={'Learn Hub || Your Payment Has Been Failed'} />
      <Container h={'100vh'} padding={'16'}>
        <Heading
          textAlign={['center']}
          children="OOPS Your Payment Has Been Failed"
          mb={6}
        />
        <VStack
          boxShadow={'lg'}
          pb={'16'}
          alignItems={'center'}
          borderRadius={'lg'}
        >
          <Box
            w={'full'}
            bg={'orange.500'}
            p={'4'}
            css={{ borderRadius: '8px 8px 0 0' }}
          >
            <Text children="Payment Failed 🤐" color={'black'} />
          </Box>
          <Box p="4">
            <VStack textAlign={'center'} px={8} mt={4} spacing={8}>
              <Text children="Your Payment Has Been failed. Please try Again" />
              <Heading size={'4xl'}>
                <RiSignalWifiErrorLine />
              </Heading>
            </VStack>
          </Box>
          <NavLink to={'/subscribe'}>
            <Button variant={'ghost'}>Try Again</Button>
          </NavLink>
        </VStack>
      </Container>
    </>
  );
};

export default PaymentFail;
