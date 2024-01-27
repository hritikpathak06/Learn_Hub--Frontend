import React, { useState } from 'react';
import MetaData from '../../Meta/MetaData';
import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import HomeVideo from '../../assets/videos/intro.mp4';

const CourseDetail = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'shjsksd',
      title: 'sample title',
      description: 'sample description',
      video: {
        url: 'nddkd',
      },
    },
    {
      _id: 'shjsksd',
      title: 'sample title2',
      description: 'sample description',
      video: {
        url: 'nddkd',
      },
    },
    {
      _id: 'shjsksd',
      title: 'sample title3',
      description: 'sample description',
      video: {
        url: 'nddkd',
      },
    },
    {
      _id: 'shjsksd',
      title: 'sample title4',
      description: 'sample description',
      video: {
        url: 'nddkd',
      },
    },
  ];

  return (
    <>
      <MetaData title={'Learn Hub || Course Detail'} />
      <Grid minH={'100vh'} templateColumns={['1fr', '3fr 1fr']} p={16}>
        <Box>
          <video
            width={'100%'}
            src={HomeVideo}
            controls
            controlsList="nodownload  noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
          />
          <Heading
            children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
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
              borderBottom={'1px solid gray'}
              onClick={() => setLectureNumber(index)}
            >
              <Text noOfLines={1}>
                #{index + 1} {element.title}
              </Text>
            </Button>
          ))}
        </VStack>
      </Grid>
    </>
  );
};

export default CourseDetail;
