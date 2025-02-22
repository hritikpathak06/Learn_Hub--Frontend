import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/courseAction';
import toast from 'react-hot-toast';
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

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
    <VStack
      className="course"
      alignItems={['center', 'flex-start']}
      mt={['1rem', '2rem']}
      ml={['2rem', '4rem']}
      pb={5}
      p={3}
      style={{
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Image src={imageSrc} boxSize={'60'} objectFit={'cover'} width={'100%'} />
      <Heading
        textAlign={['center', 'center']}
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
      <Stack
        direction={['column', 'row']}
        alignItems={'center'}
        justifyContent={'center'}
        m={'auto'}
      >
        <NavLink to={`/course/${id}`}>
          <Button colorScheme="orange">Watch Now</Button>
        </NavLink>
        {/* <Button
          // variant={'ghost'}
          colorScheme="gray"
          onClick={() => addToPlaylistHandler(id)}
        >
          Add To Playlist
        </Button> */}
      </Stack>
    </VStack>
  );
};

const PopularCourse = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const { courses, loading, error, message } = useSelector(
    state => state.courses
  );

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));
    message && toast.success(message);
    error && toast.error(error);
  }, [category, keyword, dispatch, message, error]);

  console.log('Courses', courses);
  return (
    <>
      <div>
        <Heading
          variant={'h1'}
          fontSize={['2rem', '4rem']}
          children="OUR POPULAR COURSE"
          textAlign={'center'}
          mb={'2rem'}
        />
        <Box height={'max-content'} width={'100vw'}>
          <Stack
            direction={'row'}
            flexWrap={'wrap'}
            alignItems={['center']}
            justifyContent={['center', 'flex-start']}
          >
            {courses.slice(0, 4).map(item => (
              <Course
                key={item._id}
                title={item.title}
                description={item.description}
                views={item.views}
                imageSrc={item.poster.url}
                id={item._id}
                creator={item.createdBy}
                lectureCount={item.numOfVideos}
              />
            ))}
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default PopularCourse;
