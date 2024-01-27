import React from 'react';
import MetaData from '../../Meta/MetaData';
import {
  Avatar,
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
import Poster from '../../assets/images/logo-home.png';
import { RiDeleteBin7Fill } from 'react-icons/ri';

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
            <Button colorScheme="orange" variant={'ghost'}>
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
      </Container>
    </>
  );
};

export default Profile;
