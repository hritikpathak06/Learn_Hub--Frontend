import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboard2Fill, RiLogoutBoxFill, RiMenu2Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/actions/userAction';
import toast from 'react-hot-toast';

const Header = ({ isAuthenticated = false, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  // Logout Handler
  const logoutHanlder = () => {
    console.log('Logged Out');
    dispatch(logOut());
    toast.success('User Logged Out Successfully');
  };

  return (
    <>
      <Button
        colorScheme="orange"
        width={'12'}
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
        onClick={onOpen}
      >
        <RiMenu2Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(2px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'3px'} textAlign={'center'}>
            LearnHub
            <ColorModeSwitcher />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'10'} alignItems={'flex-start'}>
              <LinkButton url="/" title="Home" onClose={onClose} />
              <LinkButton url="/courses" title="Courses" onClose={onClose} />
              <LinkButton
                url="/request"
                title="Request A Course"
                onClose={onClose}
              />
              <LinkButton url="/about" title="About Us" onClose={onClose} />
              <LinkButton
                url="/contact"
                title="Get In Touch"
                onClose={onClose}
              />

              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <NavLink to={'/profile'} onClick={onClose}>
                          <Button variant={'ghost'} colorScheme={'yellow'}>
                            Profile
                          </Button>
                        </NavLink>
                        <Button variant={'ghost'} onClick={logoutHanlder}>
                          <RiLogoutBoxFill />
                          Logout
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && (
                        <NavLink to={'/admin/dashboard'} onClick={onClose}>
                          <Button colorScheme={'orange'}>
                            <RiDashboard2Fill />
                            Dashboard
                          </Button>
                        </NavLink>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <NavLink to={'/login'} onClick={onClose}>
                      <Button colorScheme={'blue'}>Login</Button>
                    </NavLink>
                    <p>or</p>
                    <NavLink to={'/register'} onClick={onClose}>
                      <Button colorScheme={'yellow'}>Register</Button>
                    </NavLink>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

// Button Function
const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <NavLink onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </NavLink>
);
