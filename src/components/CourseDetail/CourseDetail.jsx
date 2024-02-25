import React, { useEffect, useState } from 'react';
import MetaData from '../../Meta/MetaData';
import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import HomeVideo from '../../assets/videos/intro.mp4';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseLectures } from '../../redux/actions/courseAction';
import './courseDetail.css';

const CourseDetail = ({ user }) => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const dispatch = useDispatch();

  const { lectures } = useSelector(state => state.courses);

  const { id } = useParams();

  // const lectures = [
  //   {
  //     _id: 'shjsksd',
  //     title: 'sample title',
  //     description: 'sample description',
  //     video: {
  //       url: 'nddkd',
  //     },
  // }
  // ];

  useEffect(() => {
    dispatch(getCourseLectures(id));
  }, [dispatch, id]);

  if (user.role !== 'admin') {
    if (
      user.subscription.status === undefined ||
      user.subscription.status !== 'active'
    ) {
      return <Navigate to={'/subscribe'} />;
    }
  }

  return (
    <>
      <MetaData title={'Learn Hub || Course Detail'} />
      <Grid minH={'100vh'} templateColumns={['1fr', '3fr 1fr']} p={16}>
        {lectures.length > 0 ? (
          <>
            <Box>
              <video
                className="video"
                width={'100%'}
                style={{ objectFit: 'contain', height: '70vh' }}
                src={lectures[lectureNumber].video.url}
                controls
                controlsList="nodownload  noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
              />
              <Heading
                children={`#${lectureNumber + 1} ${
                  lectures[lectureNumber].title
                }`}
                m={4}
              />
              <Heading children="Description" m={4} />
              <Text m={4} children={lectures[lectureNumber].description} />
            </Box>
            <VStack>
              {lectures.map((element, index) => (
                <Button
                  key={element._id}
                  width={'100%'}
                  p={4}
                  textAlign={'center'}
                  m={0}
                  ml={[6]}
                  textColor={'#fff'}
                  bg={'#000'}
                  borderBottom={'1px solid gray'}
                  onClick={() => setLectureNumber(index)}
                >
                  <Text noOfLines={1}>
                    #{index + 1} {element.title}
                  </Text>
                </Button>
              ))}
            </VStack>
          </>
        ) : (
          <Heading children="No Lecture Present" />
        )}
      </Grid>
    </>
  );
};

export default CourseDetail;
