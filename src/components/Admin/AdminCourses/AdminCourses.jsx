import React from 'react';
import MetaData from '../../../Meta/MetaData';
import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import Cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Dashboard/Sidebar';
import CourseModal from './CourseModal';

const AdminCourses = () => {
  const courses = [
    {
      _id: 1,
      poster: {
        url: <Cursor />,
      },
      title: 'React Course',
      category: 'development',
      createdBy: 'Ritik Pathak',
      views: 300,
      numOfVideos: 15,
    },
    {
      _id: 2,
      poster: {
        url: <Cursor />,
      },
      title: 'React Course',
      category: 'development',
      createdBy: 'Ritik Pathak',
      views: 300,
      numOfVideos: 15,
    },
    {
      _id: 3,
      poster: {
        url: <Cursor />,
      },
      title: 'React Course',
      category: 'development',
      createdBy: 'Ritik Pathak',
      views: 300,
      numOfVideos: 15,
    },
  ];

  const { isOpen, onClose, onOpen } = useDisclosure();

  const courseDetailHandler = id => {
    // console.log('updated', id);
    onOpen();
  };

  const deleteLectureHandler = id => {
    console.log('deleted', id);
  };

  const deleteButtonHandler = (courseId, lectureId) => {
    console.log('CourseId', courseId);
    console.log('LectureId', lectureId);
  };

  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
    console.log('Form Submitted');
  };

  return (
    <>
      <MetaData title={'Learn Hub || Admin All Users'} />
      <Grid
        minH={'100vh'}
        templateColumns={['1fr', '5fr 1fr']}
        css={{ cursor: `url(${Cursor}),default` }}
      >
        <Box p={['0', '8']} overflowX={'auto'}>
          <Heading
            textTransform={'uppercase'}
            children="All Lectures"
            m={16}
            textAlign={['center', 'left']}
          />
          <TableContainer w_idth={['100vw', 'full']}>
            <Table variant={'stripe'} size={'lg'}>
              <TableCaption children="All Available Lectures" />
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Poster</Th>
                  <Th>Title</Th>
                  <Th>Category</Th>
                  <Th>Creator</Th>
                  <Th isNumeric justifyContent={'flex-end'}>
                    Views
                  </Th>
                  <Th isNumeric justifyContent={'flex-end'}>
                    Lecture
                  </Th>
                  <Th isNumeric justifyContent={'flex-end'}>
                    Action
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {courses.map(item => (
                  <Row
                    courseDetailHandler={courseDetailHandler}
                    deleteLectureHandler={deleteLectureHandler}
                    key={item._id}
                    item={item}
                  />
                ))}
              </Tbody>
              <Tbody></Tbody>
            </Table>
          </TableContainer>
          <CourseModal
            // lectures
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
            id={'anjsjjs'}
            deleteButtonHandler={deleteButtonHandler}
            addLectureHandler={addLectureHandler}
            courseTitle={'React Js'}
          />
        </Box>
        <Sidebar />
      </Grid>
    </>
  );
};

export default AdminCourses;

function Row({ item, courseDetailHandler, deleteLectureHandler }) {
  return (
    <Tr>
      <Td>{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'} ml={-12}>
          <Button
            variant={'outlined'}
            color={'purple'}
            onClick={() => courseDetailHandler(item._id)}
          >
            View Lecture
          </Button>
          <Button
            colorScheme="red"
            onClick={() => deleteLectureHandler(item._id)}
          >
            Delete
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
