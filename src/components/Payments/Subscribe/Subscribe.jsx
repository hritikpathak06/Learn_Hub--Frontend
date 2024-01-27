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
import { NavLink } from 'react-router-dom';

const Subscribe = () => {
  return (
    <>
      <MetaData title={'Learn Hub || Subscribe To enjoy Unlimited Courses'} />
      <Container h={'100vh'} p={16}>
        <Heading children="Welcome" m={'8'} textAlign={'center'} />
        <VStack
          boxShadow={'lg'}
          spacing={0}
          alignItems={'stretch'}
          borderRadius={'lg'}
        >
          <Box
            bg={'orange.400'}
            padding={'4'}
            css={{ borderRadius: '8px 8px 0 0' }}
          >
            <Text
              color={'black'}
              fontWeight={'bolder'}
              children={`Best pack at just - ₹299.00`}
            />
          </Box>
          <Box p={'4'}>
            <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
              <Text
                fontWeight={'bolder'}
                children={`Join The Course And Get Access To all Courses`}
              />
              <Heading size={'md'} children="₹299.00 Only" />
            </VStack>
            <Button my="8" width={'full'} colorScheme="orange">
              Buy Now
            </Button>
          </Box>
          <Box
            bg={'blackAlpha.700'}
            p={'4'}
            css={{ borderRadius: '0 0 8px 8px' }}
          >
            <Heading size={'sm'} children="100% refund at cancellation" color={"#fff"} textTransform={"uppercase"} textAlign={"center"} />
            <Text fontSize={"xs"} color={"#fff"} textAlign={"center"}>
                 <NavLink>
                    **Terms and Conditions applied.**
                 </NavLink>
            </Text>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Subscribe;
