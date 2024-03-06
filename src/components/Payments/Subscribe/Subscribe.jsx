import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { server } from '../../../redux/store';
import axios from 'axios';
import { buySubscription } from '../../../redux/actions/subscriptionAction';
import toast from 'react-hot-toast';
import logo from '../../../assets/images/logo-home.png';

const Subscribe = ({ user }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState('');

  const { subscriptionId, loading, error } = useSelector(
    state => state.subscription
  );

  const subscribeHanlder = async () => {
    const { data } = await axios.get(`${server}/getrazorpaykey`);
    setKey(data.key);
    dispatch(buySubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    // if (courseError) {
    //   toast.error(c);
    //   dispatch({ type: 'clearError' });
    // }
    if (subscriptionId) {
      const openPopUp = () => {
        const options = {
          key,
          name: 'Learn Hub',
          description: 'Get access to all premium content',
          image: logo,
          subscription_id: subscriptionId,
          callback_url: `${server}/paymentverification`,
          prefill: {
            name: user.name,
            email: user.email,
            contact: '',
          },
          notes: {
            address: 'Ritik Kumar Pathak',
          },
          theme: {
            color: '#FF6783',
          },
        };

        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  }, [
    dispatch,
    error,
    // courseError,
    user.name,
    user.email,
    key,
    subscriptionId,
  ]);

  return (
    <>
      <MetaData title={'Learn Hub || Subscribe To enjoy Unlimited Courses'} />
      <Container h={'100vh'} p={16} >
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
              children={`Best pack at just - ₹399.00`}
            />
          </Box>
          <Box p={'4'}>
            <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
              <Text
                fontWeight={'bolder'}
                children={`Join The Course And Get Access To all Courses`}
              />
              <Heading size={'md'} children="₹399.00 Only" />
            </VStack>
            <Button
              my="8"
              width={'full'}
              colorScheme="orange"
              onClick={subscribeHanlder}
              isLoading={loading}
            >
              Buy Now
            </Button>
          </Box>
          <Box
            bg={'blackAlpha.700'}
            p={'4'}
            css={{ borderRadius: '0 0 8px 8px' }}
          >
            <Heading
              size={'sm'}
              children="100% refund at cancellation"
              color={'#fff'}
              textTransform={'uppercase'}
              textAlign={'center'}
            />
            <Text fontSize={'xs'} color={'#fff'} textAlign={'center'}>
              <NavLink>**Terms and Conditions applied.**</NavLink>
            </Text>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default Subscribe;
