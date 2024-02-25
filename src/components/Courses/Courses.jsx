import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/courseAction';
import Loader from '../Layout/Loader/Loader';
import { addToPlaylist } from '../../redux/actions/profileAction';
import toast from 'react-hot-toast';
import { loadUser } from '../../redux/actions/userAction';

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
      <Image src={imageSrc} boxSize={'60'} objectFit={'cover'} />
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
        <Text
          children={'Creator-'}
          textTransform={'uppercase'}
          fontWeight={'bolder'}
        />
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
          // variant={'ghost'}
          colorScheme="gray"
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

  const dispatch = useDispatch();

  const { courses, loading, error, message } = useSelector(
    state => state.courses
  );

  //   Add To Playlist Handler
  const addToPlaylistHandler = async courseId => {
    console.log('ADDED TO PLAYLIST');
    console.log(courseId);
    await dispatch(addToPlaylist(courseId));
    dispatch(loadUser());
  };

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));
    message && toast.success(message);
    error && toast.error(error);
  }, [category, keyword, dispatch, message, error]);

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
        {loading ? (
          <Loader />
        ) : (
          <Stack
            direction={['column', 'row']}
            flexWrap={'wrap'}
            justifyContent={['flex-start', 'space-evenly']}
            alignItems={['center', 'flex-start']}
          >
            {courses.length > 0 ? (
              courses.map(item => (
                <Course
                  key={item._id}
                  title={item.title}
                  description={item.description}
                  views={item.views}
                  imageSrc={item.poster.url}
                  id={item._id}
                  creator={item.createdBy}
                  lectureCount={item.numOfVideos}
                  addToPlaylistHandler={addToPlaylistHandler}
                />
              ))
            ) : (
              <Heading mt={4}>Course Is Not Availbale Right Now</Heading>
            )}
          </Stack>
        )}
      </Container>
    </>
  );
};

export default Courses;
