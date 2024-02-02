import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCourses,
  getCourseLectures,
} from '../../../redux/actions/courseAction';
import {
  addLecture,
  deleteCourse,
  deleteLecture,
} from '../../../redux/actions/adminAction';
import toast from 'react-hot-toast';

const AdminCourses = () => {
  const [courseId, setCourseId] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();

  const { courses, lectures } = useSelector(state => state.courses);
  const { message, error, loading } = useSelector(state => state.admin);

  const courseDetailHandler = (courseId, title) => {
    dispatch(getCourseLectures(courseId));
    onOpen();
    setCourseId(courseId);
    setCourseTitle(title);
  };

  const deleteCourseHandler = async id => {
    await dispatch(deleteCourse(id));
    dispatch(getAllCourses());
  };

  const deleteButtonHandler = async (courseId, lectureId) => {
    await dispatch(deleteLecture(courseId, lectureId));
    dispatch(getCourseLectures(courseId));
  };

  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('title', title);
    myForm.append('description', description);
    myForm.append('file', video);
    dispatch(addLecture(courseId, myForm));
  };

  useEffect(() => {
    dispatch(getAllCourses());
    message && toast.success(message);
    error && toast.error(error);
  }, [message, error, dispatch]);

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
                    deleteCourseHandler={deleteCourseHandler}
                    key={item._id}
                    item={item}
                    loading={loading}
                  />
                ))}
              </Tbody>
              <Tbody></Tbody>
            </Table>
          </TableContainer>
          <CourseModal
            lectures={lectures}
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
            id={courseId}
            deleteButtonHandler={deleteButtonHandler}
            addLectureHandler={addLectureHandler}
            courseTitle={courseTitle}
          />
        </Box>
        <Sidebar />
      </Grid>
    </>
  );
};
export default AdminCourses;

function Row({ item, courseDetailHandler, deleteCourseHandler, loading }) {
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
            onClick={() => courseDetailHandler(item._id, item.title)}
          >
            View Lecture
          </Button>
          <Button
            colorScheme="red"
            onClick={() => deleteCourseHandler(item._id)}
            isLoading={loading}
          >
            Delete
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
