import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { memo, useState } from 'react';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { fileUploadCss } from '../../Auth/Register/Register';
import { useSelector } from 'react-redux';

const CourseModal = ({
  lectures = [],
  isOpen,
  onClose,
  id,
  deleteButtonHandler,
  courseTitle,
  addLectureHandler,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');

  const { loading } = useSelector(state => state.admin);

  const changeVideoHandler = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={'full'}
        scrollBehavior="outside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{courseTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={16}>
            <Grid templateColumns={['1fr', '3fr 1fr']}>
              <Box px={[0, 16]}>
                <Box my={5}>
                  <Heading children={courseTitle} />
                  <Heading children={`#${id}`} size={'sm'} opacity={0.4} />
                  <Heading children={'Lectures'} size={'lg'} />
                  {lectures.map((item, index) => (
                    <VideoCard
                      key={index}
                      title={item.title}
                      description={item.description}
                      num={index + 1}
                      lectureId={item._id}
                      courseId={id}
                      deleteButtonHandler={deleteButtonHandler}
                    />
                  ))}
                </Box>
              </Box>
              <Box>
                <form
                  onSubmit={e =>
                    addLectureHandler(e, id, title, description, video)
                  }
                >
                  <VStack spacing={4}>
                    <Heading
                      children="Add Lecture"
                      size={'md'}
                      textTransform={'uppercase'}
                    />
                    <Input
                      focusBorderColor="purple.400"
                      placeHolder="Enter The Title"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                    />
                    <Input
                      focusBorderColor="purple.400"
                      placeHolder="Enter The Description"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    />
                    <Input
                      accept="video/*"
                      required
                      type="file"
                      focusBorderColor="purple.500"
                      css={{ '&::file-selector-button': fileUploadCss }}
                      onChange={changeVideoHandler}
                    />
                    {videoPrev && (
                      <video
                        controlsList="nodownload"
                        controls
                        src={videoPrev}
                      ></video>
                    )}
                    <Button
                      width={'full'}
                      colorScheme="purple"
                      type="submit"
                      isLoading={loading}
                    >
                      Add Lecture
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CourseModal ;

// Function For Video Card
function VideoCard({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteButtonHandler,
}) {
  return (
    <>
      <Stack
        direction={['column', 'row']}
        my={8}
        borderRadius={'lg'}
        boxShadow={'0 0 10px rgba(0,0,0,0.6)'}
        justifyContent={['flex-start', 'space-between']}
        p={[4, 8]}
      >
        <Box>
          <Heading size={'sm'} children={`#${num} ${title}`} />
          <Text children={description} />
        </Box>
        <Button
          color={'purple.600'}
          onClick={() => deleteButtonHandler(courseId, lectureId)}
        >
          <RiDeleteBack2Fill />
        </Button>
      </Stack>
    </>
  );
}
