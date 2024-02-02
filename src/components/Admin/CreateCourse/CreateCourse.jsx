import React, { useEffect, useState } from 'react';
import MetaData from '../../../Meta/MetaData';
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import Cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Dashboard/Sidebar';
import { fileUploadCss } from '../../Auth/Register/Register';
import { createCourse } from '../../../redux/actions/adminAction';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Structure And Algorithm',
    'App Development',
    'Game Development',
    'Data Science',
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   Image Handler
  const changeImageHandler = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const createCourseHandler = event => {
    event.preventDefault();
    const myForm = new FormData();
    myForm.append('title', title);
    myForm.append('description', description);
    myForm.append('category', category);
    myForm.append('createdBy', createdBy);
    myForm.append('file', image);
    dispatch(createCourse(myForm));
    navigate('/admin/courses');
  };

  const { message, error } = useSelector(state => state.admin);

  useEffect(() => {
    message && toast.success(message);
    error && toast.error(error);
  }, [message, error]);

  return (
    <>
      <MetaData title={'Learn Hub || Admin Create Course'} />
      <Grid
        minH={'100vh'}
        templateColumns={['1fr', '5fr 1fr']}
        css={{ cursor: `url(${Cursor}),default` }}
      >
        <Container py={16}>
          <form onSubmit={createCourseHandler}>
            <Heading
              textTransform={'uppercase'}
              children="Create Course"
              m={16}
              textAlign={['center', 'left']}
            />

            <VStack m="auto" spacing={8}>
              <Input
                value={title}
                onChange={event => setTitle(event.target.value)}
                placeholder="Enter The Title"
                type="text"
                focusBorderColor="purple.500"
              />
              <Input
                value={description}
                onChange={event => setDescription(event.target.value)}
                placeholder="Enter The Description"
                type="text"
                focusBorderColor="purple.500"
              />
              <Input
                value={createdBy}
                onChange={event => setCreatedBy(event.target.value)}
                placeholder="Enter Your Name"
                type="text"
                focusBorderColor="purple.500"
              />
              <Select
                focusBorderColor="purple.500"
                value={category}
                onChange={event => setCategory(event.target.value)}
              >
                <option value="">Select Category</option>
                {categories.map(item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
              <Input
                accept="image/*"
                required
                type="file"
                focusBorderColor="purple.500"
                css={{ '&::file-selector-button': fileUploadCss }}
                onChange={changeImageHandler}
              />
              {imagePrev && (
                <Image src={imagePrev} boxSize={40} objectFit={'contain'} />
              )}
              <Button width={'full'} colorScheme="purple" type="submit">
                Create Course
              </Button>
            </VStack>
          </form>
        </Container>
        <Sidebar />
      </Grid>
    </>
  );
};

export default CreateCourse;
