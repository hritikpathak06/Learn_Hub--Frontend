import React, { useState } from 'react';
import MetaData from '../../Meta/MetaData';
import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import Poster from '../../assets/images/logo.png';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
        size={'sm'}
      />
      <Text children={description} noOfLines={2} />
      <HStack>
        <Text children={'Creator'} textTransform={'uppercase'} />
        <Text children={creator} textTransform={'uppercase'} />
      </HStack>
      <Heading
        textAlign={'center'}
        textTransform={'uppercase'}
        size={'xs'}
        children={`Lectures- ${lectureCount}`}
      />
      <Heading
        textTransform={'uppercase'}
        size={'xs'}
        children={`Views- ${views}`}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <NavLink to={`/course/${id}`}>
          <Button colorScheme="orange">Watch Now</Button>
        </NavLink>
        <Button
          variant={'ghost'}
          colorScheme="orange"
          onClick={() => addToPlaylistHandler(id)}
        >
          Add To Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  //   Add To Playlist Handler
  const addToPlaylistHandler = () => {
    console.log('ADDED TO PLAYLIST');
  };

  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Structure And Algorithm',
    'App Development',
    'Game Development',
    'Data Science',
  ];
  return (
    <>
      <MetaData title={'Learn Hub || Our Featured Courses'} />
      <Container minH={'95vh'} maxW={'90%'} paddingY={'8'}>
        <Heading children="All Courses" m={'8'} />
        <Input
          value={keyword}
          onChange={event => setKeyword(event.target.value)}
          placeholder="Search Your Favorite Course..."
          type="text"
          focusBorderColor="orange.300"
        />
        <HStack
          overflowX={'auto'}
          paddingY={'8'}
          css={{
            '&::-webkit-scrollbar': {
              // display:"none"
              width: '2px',
            },
          }}
        >
          {categories &&
            categories.map((item, index) => (
              <Button minW={'60'} onClick={() => setCategory(item)} key={index}>
                <Text children={item} />
              </Button>
            ))}
        </HStack>
        <Stack
          direction={['column', 'row']}
          flexWrap={'wrap'}
          justifyContent={['flex-start', 'space-evenly']}
          alignItems={['center', 'flex-start']}
        >
          <Course
            title={'Sample Title'}
            description={'SampleDescription'}
            views={23}
            imageSrc={Poster}
            id={'ampleId'}
            creator={'sampleBoy'}
            lectureCount={2}
            addToPlaylistHandler={addToPlaylistHandler}
          />
            <Course
            title={'Sample Title'}
            description={'SampleDescription'}
            views={23}
            imageSrc={Poster}
            id={'ampleId'}
            creator={'sampleBoy'}
            lectureCount={2}
            addToPlaylistHandler={addToPlaylistHandler}
          />
            <Course
            title={'Sample Title'}
            description={'SampleDescription'}
            views={23}
            imageSrc={Poster}
            id={'ampleId'}
            creator={'sampleBoy'}
            lectureCount={2}
            addToPlaylistHandler={addToPlaylistHandler}
          />
            <Course
            title={'Sample Title'}
            description={'SampleDescription'}
            views={23}
            imageSrc={Poster}
            id={'ampleId'}
            creator={'sampleBoy'}
            lectureCount={2}
            addToPlaylistHandler={addToPlaylistHandler}
          />
            <Course
            title={'Sample Title'}
            description={'SampleDescription'}
            views={23}
            imageSrc={Poster}
            id={'ampleId'}
            creator={'sampleBoy'}
            lectureCount={2}
            addToPlaylistHandler={addToPlaylistHandler}
          />
            <Course
            title={'Sample Title'}
            description={'SampleDescription'}
            views={23}
            imageSrc={Poster}
            id={'ampleId'}
            creator={'sampleBoy'}
            lectureCount={2}
            addToPlaylistHandler={addToPlaylistHandler}
          />
             <Course
            title={'Sample Title'}
            description={'SampleDescription'}
            views={23}
            imageSrc={Poster}
            id={'ampleId'}
            creator={'sampleBoy'}
            lectureCount={2}
            addToPlaylistHandler={addToPlaylistHandler}
          />
             <Course
            title={'Sample Title'}
            description={'SampleDescription'}
            views={23}
            imageSrc={Poster}
            id={'ampleId'}
            creator={'sampleBoy'}
            lectureCount={2}
            addToPlaylistHandler={addToPlaylistHandler}
          />
        </Stack>
      </Container>
    </>
  );
};

export default Courses;
