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
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { NavLink, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const search = useSearchParams()[0].get('reference');
  return (
    <>
      <MetaData title={'Learn Hub || Your Payment Has Been Successed'} />
      <Container h={'100vh'} padding={'16'}>
        <Heading
          textAlign={['center']}
          children="You Have Got Pro Pack"
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
            <Text children="Payment Success" color={'black'} />
          </Box>
          <Box p="4">
            <VStack textAlign={'center'} px={8} mt={4} spacing={8}>
              <Text children="Congrats You are now our pro member.You Can Access All Courses Now" />
              <Heading size={'4xl'}>
                <RiCheckboxCircleFill />
              </Heading>
            </VStack>
          </Box>
          <NavLink to={'/profile'}>
            <Button variant={'ghost'}>Go To Profile</Button>
            <Heading size={'xs'}>Refrence:{search}</Heading>
          </NavLink>
        </VStack>
      </Container>
    </>
  );
};

export default PaymentSuccess;
