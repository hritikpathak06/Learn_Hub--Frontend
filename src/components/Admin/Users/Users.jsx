import React, { useEffect } from 'react';
import MetaData from '../../../Meta/MetaData';
import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Dashboard/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import {
  deleteUser,
  getAllUsers,
  updateUserRole,
} from '../../../redux/actions/adminAction';

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users);
  const { message, error } = useSelector(state => state.admin);
  const updateRoleHandler = async id => {
    await dispatch(updateUserRole(id));
    dispatch(getAllUsers());
  };

  const deleteUserHandler = async id => {
    await dispatch(deleteUser(id));
    toast.success('User Deleted Successfully');
    dispatch(getAllUsers());
  };

  useEffect(() => {
    dispatch(getAllUsers());
    message && toast.success(message);
    error && toast.error(error);
  }, [message, error]);

  return (
    <>
      <MetaData title={'Learn Hub || Admin All Users'} />
      <Grid
        minH={'100vh'}
        templateColumns={['1fr', '5fr 1fr']}
        css={{ cursor: `url(${Cursor}),default` }}
      >
        <Box p={['0', '16']} overflowX={'auto'}>
          <Heading
            textTransform={'uppercase'}
            children="All Users"
            m={16}
            textAlign={['center', 'left']}
          />
          <TableContainer w_idth={['100vw', 'full']}>
            <Table variant={'stripe'} size={'lg'}>
              <TableCaption children="All Available Users" />
              <Thead>
                <Tr>
                  <Th>_id</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Subscription</Th>
                  <Th isNumeric justifyContent={'flex-end'}>
                    Action
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map(item => (
                  <Tr key={item._id}>
                    <Td>#{item._id}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.email}</Td>
                    <Td>{item.role}</Td>
                    <Td>
                      {item.subscription.status === 'active'
                        ? 'Active'
                        : 'Not Active'}
                    </Td>
                    <Td isNumeric>
                      <HStack justifyContent={'flex-end'} ml={'-2rem'}>
                        <Button
                          variant={'outlined'}
                          color={'purple'}
                          onClick={() => updateRoleHandler(item._id)}
                        >
                          Change Role
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => deleteUserHandler(item._id)}
                        >
                          Delete
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Sidebar />
      </Grid>
    </>
  );
};

export default Users;
