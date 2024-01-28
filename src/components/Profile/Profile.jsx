import React, { useState } from 'react';
import MetaData from '../../Meta/MetaData';
import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
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
  useDisclosure,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import Poster from '../../assets/images/logo-home.png';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../Auth/Register/Register';

const Profile = () => {
  const user = {
    name: 'Ritik Kumar Pathak',
    email: 'ritik@gmail.com',
    createdAt: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: undefined,
    },
    playlist: [
      {
        course: 'ajklsd',
        poster: Poster,
      },
      {
        course: 'ajklsd',
        poster: Poster,
      },
      {
        course: 'ajklsd',
        poster: Poster,
      },
      {
        course: 'ajklsd',
        poster: Poster,
      },
      {
        course: 'ajklsd',
        poster: Poster,
      },
      {
        course: 'ajklsd',
        poster: Poster,
      },
    ],
  };

  const removeFromPlaylistHanlder = id => {
    console.log(id);
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  const changeImageSubmitHandler = (e, image) => {
    console.log(image);
    e.preventDefault();
  };

  return (
    <>
      <MetaData title={'Learn Hub || Your Profile'} />
      <Container minHeight={'100vh'} maxW={'container.lg'} py={8}>
        <Heading
          children="Profile"
          m={8}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <Stack
          justifyContent={'flex-start'}
          direction={['column', 'row']}
          alignItems={'center'}
          spacing={['8', '16']}
          p={8}
        >
          <VStack>
            <Avatar boxSize={48} />
            <Button colorScheme="orange" variant={'ghost'} onClick={onOpen}>
              Change Pic
            </Button>
          </VStack>
          <VStack spacing={4} alignItems={['center', 'flex-start']}>
            <HStack>
              <Text children="Name" fontWeight={'bold'} />
              <Text children={user.name} />
            </HStack>
            <HStack>
              <Text children="Email" fontWeight={'bold'} />
              <Text children={user.email} />
            </HStack>
            <HStack>
              <Text children="Since" fontWeight={'bold'} />
              <Text children={user.createdAt.split('T')[0]} />
            </HStack>
            {user.role !== 'admin' && (
              <HStack>
                <Text children="Subscription" fontWeight={'bold'} />
                {user.subscription.status === 'active' ? (
                  <Button colorScheme="red">Cancel Subscription</Button>
                ) : (
                  <NavLink to={'/subscribe'}>
                    <Button colorScheme="orange"> Subscription</Button>
                  </NavLink>
                )}
              </HStack>
            )}
            <Stack direction={['column', 'row']} alignItems={'center'}>
              <NavLink to={'/updateprofile'}>
                <Button>Update Profile</Button>
              </NavLink>
              <NavLink to={'/changepassword'}>
                <Button>Change Password</Button>
              </NavLink>
            </Stack>
          </VStack>
        </Stack>
        {user.playlist.length > 0 && (
          <>
            <Heading size={'md'} my={8} textAlign={['center', 'left']}>
              Playlist
            </Heading>
            <Stack
              direction={['column', 'row']}
              alignItems={'center'}
              flexWrap={'wrap'}
              p={4}
            >
              {user.playlist.map((element, index) => (
                <VStack w={48} m={2} key={element.course}>
                  <Image
                    width={'full'}
                    objectFit={'contain'}
                    src={element.poster}
                  />
                  <HStack>
                    <NavLink to={`/course/${element.course}`}>
                      <Button colorScheme="orange" variant={'ghost'}>
                        Watch Now
                      </Button>
                    </NavLink>
                    <Button
                      variant={'ghost'}
                      onClick={() => removeFromPlaylistHanlder(element.course)}
                    >
                      <RiDeleteBin7Fill />
                    </Button>
                  </HStack>
                </VStack>
              ))}
            </Stack>
          </>
        )}
        <ChangePhotoBox
          isOpen={isOpen}
          onClose={onClose}
          changeImageSubmitHandler={changeImageSubmitHandler}
        />
      </Container>
    </>
  );
};
export default Profile;



// Update Profile Pic Function
function ChangePhotoBox({
  isOpen,
  onClose,
  changeImageSubmitHandler,
  loading,
}) {
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = () => {
    onClose();
    setImagePrev('');
    setImage('');
  };
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}

                <Input
                  type={'file'}
                  css={{ '&::file-selector-button': fileUploadCss }}
                  onChange={changeImage}
                />

                <Button
                  w="full"
                  colorScheme={'orange'}
                  type="submit"
                >
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>

        <ModalFooter>
          <Button mr="3" onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}