import {
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import BG from '../../assets/images/bg.png';

const HomeHeader = () => {
  return (
    <>
      <div style={{ marginTop: '6rem' }}>
        <Stack
          direction={['column', 'row']}
          minW={'100vw'}
          h={['max-content', '100vh']}
        >
          <VStack
            width={['100%', '50%']}
            justifyContent={'flex-start'}
            alignItems={['center', 'flex-start']}
          >
            <Heading
              variant={'h1'}
              fontSize={['3rem', '6rem']}
              marginLeft={['0px', '50px']}
              color={'gray'}
            >
              LEARNING
            </Heading>
            <Heading
              variant={'h1'}
              fontSize={['3rem', '6rem']}
              marginLeft={['0px', '50px']}
              color={'#008000'}
            >
              WITHOUT{' '}
            </Heading>
            <Heading
              variant={'h1'}
              fontSize={['3rem', '6rem']}
              marginLeft={['0px', '50px']}
              color={'#008000'}
            >
              LIMITS
            </Heading>

            <Text
              marginLeft={['0px', '50px']}
              fontSize={['1rem','2rem']}
              textAlign={['center', 'start']}
              color={'gray'}
            >
              Join our online community and learn from our professional
            </Text>
            <Stack direction={'row'} marginLeft={['0px', '50px']} mt={'1rem'}>
              <Button p={'25px'} color={'gray'}>
                View Courses
              </Button>
              <Button p={'25px'} color={'#fff'} bg={'tomato'}>
                Create Account
              </Button>
            </Stack>
            <Stack
              direction={'row'}
              w={['100%', '80%']}
              marginLeft={['0px', '50px']}
              alignItems={'center'}
              justifyContent={'space-between'}
              mt={'3rem'}
              padding={'30px'}
            >
              <VStack>
                <Heading variant={'h1'}>95%</Heading>
                <Text>Student's Approval</Text>
              </VStack>
              <VStack>
                <Heading variant={'h1'}>+120</Heading>
                <Text>Online Courses</Text>
              </VStack>
              <VStack>
                <Heading variant={'h1'}>+20</Heading>
                <Text>Categories</Text>
              </VStack>
            </Stack>
          </VStack>
          <VStack
            width={['100%', '50%']}
            justifyContent={'flex-start'}
            alignItems={['center', 'flex-start']}
            height={['max-content']}
          >
            <Stack>
              <Image src={BG} />
            </Stack>
          </VStack>
        </Stack>
      </div>
    </>
  );
};

export default HomeHeader;
