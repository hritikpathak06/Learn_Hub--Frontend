import React from 'react';
import MetaData from '../../../Meta/MetaData';
import { Box, Grid } from '@chakra-ui/react';
import Cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Dashboard/Sidebar';

const AdminCourses = () => {
  return (
    <>
      <MetaData title={'Learn Hub || Admin All Courses'} />
      <Grid
        minH={'100vh'}
        templateColumns={['1fr', '5fr 1fr']}
        css={{ cursor: `url(${Cursor}),default` }}
      >
        <Box>

        </Box>
        <Sidebar/>
      </Grid>
    </>
  );
};

export default AdminCourses;
