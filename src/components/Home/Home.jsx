import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import LOGO from '../../assets/images/logo-home.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAndroid, DiAws } from 'react-icons/di';
import HomeVideo from '../../assets/videos/learnhub.mp4';
import MetaData from '../../Meta/MetaData';
import BG from '../../assets/images/bg.png';
import HomeHeader from './HomeHeader';
import PopularCourse from './PopularCourse';

const Home = () => {
 
  return (
    <>
      <MetaData title={'Learn Hub || An Educational Platform'} />
      <main>
        <div className="container2">
          <video
            src={HomeVideo}
            autoPlay
            muted
            loop
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
          />
        </div>
        <HomeHeader />
        <section className="home">
        <Box padding={'8'} bg={'blackAlpha.700'}>
            <Heading
              children="OUR BRAND PARTENERS"
              textAlign={'center'}
              fontFamily={'body'}
              color={'orange.500'}
            />
            <HStack
              className="banner_brands"
              justifyContent={'space-evenly'}
              marginTop={'4'}
            >
              <CgGoogle />
              <CgYoutube />
              <SiCoursera />
              <SiUdemy />
              <DiAndroid />
              <DiAws />
            </HStack>
          </Box>
          <div className="container">
            <Stack
              direction={['column', 'row']}
              height="100%"
              justifyContent={['center', 'space-between']}
              alignItems="center"
              spacing={['16', '56']}
            >
              <Image
                boxSize={'md'}
                src={LOGO}
                objectFit={'contain'}
                className="home__image"
              />
              <VStack width={'full'} alignItems={['center', 'flex-end']}>
                <Heading
                  children="LEARN FROM OUR TEACHERS"
                  size={'2xl'}
                  textAlign={['center', 'flex-start']}
                />
                <Text
                  textAlign={['center', 'flex-start']}
                  children="Find Valuable Courses At Cheap Price"
                />
                <NavLink to="/courses">
                  <Button size={'lg'} colorScheme="orange">
                    Enroll Now
                  </Button>
                </NavLink>
              </VStack>
            
            </Stack>
          </div>  
        </section>
        <PopularCourse/>
        <Box padding={'8'} bg={'blackAlpha.700'}>
            <Heading
              children="OUR BRAND PARTENERS"
              textAlign={'center'}
              fontFamily={'body'}
              color={'orange.500'}
            />
            <HStack
              className="banner_brands"
              justifyContent={'space-evenly'}
              marginTop={'4'}
            >
              <CgGoogle />
              <CgYoutube />
              <SiCoursera />
              <SiUdemy />
              <DiAndroid />
              <DiAws />
            </HStack>
          </Box>
      </main>
    </>
  );
};

export default Home;
