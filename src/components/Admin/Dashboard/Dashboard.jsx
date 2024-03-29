import React, { useEffect } from 'react';
import MetaData from '../../../Meta/MetaData';
import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import Cursor from '../../../assets/images/cursor.png';
import Sidebar from './Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardStats } from '../../../redux/actions/adminAction';
import Loader from '../../Layout/Loader/Loader';

const Dashboard = () => {
  const dispatch = useDispatch();

  const {
    loading,
    stats,
    usersCount,
    subscriptionCount,
    viewsCount,
    usersPercentage,
    subscriptionPercentage,
    viewsPercentage,
    subscriptionProfit,
    viewsProfit,
    usersProfit,
  } = useSelector(state => state.admin);

  useEffect(() => {
    dispatch(getDashboardStats());
  }, []);

  console.log(stats);
  return (
    <>
      <MetaData title={'Learn Hub || Admin Dashboard Panel'} />
      <Grid
        minH={'100vh'}
        templateColumns={['1fr', '5fr 1fr']}
        css={{ cursor: `url(${Cursor}),default` }}
      >
        {loading || !stats ? (
          <Loader />
        ) : (
          <Box boxSizing="border-box" py={16} px={['4', '0']}>
            <Text
              children={`Last Change Was On ${
                String(new Date(stats[11].createdAt)).split('G')[0]
              }`}
              textAlign={'center'}
              opacity={0.5}
            />
            <Heading
              children="Dashboard"
              ml={['0', '16']}
              mb={['16']}
              textAlign={['center', 'left']}
            />
            <Stack
              direction={['column', 'row']}
              minH={24}
              justifyContent={'space-evenly'}
            >
              <DataBox
                title="Views"
                qty={viewsCount}
                qtyPercentage={viewsPercentage}
                profit={true}
              />
              <DataBox
                title="Users"
                qty={usersCount}
                qtyPercentage={usersPercentage}
                profit={true}
              />
              <DataBox
                title="Subscription"
                qty={subscriptionCount}
                qtyPercentage={subscriptionPercentage}
                profit={false}
              />
            </Stack>
            <Box
              m={['0', '16']}
              borderRadius={'lg'}
              p={['0', '16']}
              mt={['4', '16']}
              boxShadow={'-2px 0 10px rgba(0,0,10,0.5)'}
            >
              <Heading
                textAlign={['center', 'left']}
                size={'md'}
                children="Views Graph"
                pt={['8', '0']}
                ml={['0', '16']}
              />
              {/* Line Graph  */}
              <LineChart viewsArray={stats.map(item => (item.views))} />
            </Box>
            <Grid templateColumns={['1fr', '2fr 1fr']}>
              <Box p={4}>
                <Heading
                  textAlign={['center', 'left']}
                  size={'md'}
                  children="Progress Bar"
                  my={8}
                  ml={['0', '16']}
                />

                <Box>
                  {/* Progress Bar */}
                  <Bar
                    title="Views"
                    value={viewsPercentage}
                    profit={viewsProfit}
                  />
                  <Bar
                    title="Users"
                    value={usersPercentage}
                    profit={usersProfit}
                  />
                  <Bar
                    title="Subscription"
                    value={subscriptionPercentage}
                    profit={subscriptionProfit}
                  />
                </Box>
              </Box>

              <Box p={['0', '16']} boxSizing="border-box" py={4}>
                <Heading
                  textAlign={'center'}
                  size={'md'}
                  mb={4}
                  children="Users"
                />
                {/* <Doughnut Graph */}
                <DoughnutChart
                  users={[subscriptionCount, usersCount - subscriptionCount]}
                />
              </Box>
            </Grid>
          </Box>
        )}
        <Sidebar />
      </Grid>
    </>
  );
};

export default Dashboard;

// Data Box Function
function DataBox({ title, qty, qtyPercentage, profit }) {
  return (
    <Box
      width={['full', '20%']}
      boxShadow={'-2px 0 10px rgba(0,0,10,0.5)'}
      p={8}
      borderRadius={'lg'}
    >
      <Text children={title} />
      <HStack spacing={6}>
        <Text fontSize={'2xl'} fontWeight={900} children={qty} />
        <HStack>
          <Text children={`${qtyPercentage} %`} />
          {profit ? (
            <RiArrowUpLine color="green" />
          ) : (
            <RiArrowDownLine color="red" />
          )}
        </HStack>
      </HStack>
      <Text children={`Since Last Month`} opacity={0.6} />
    </Box>
  );
}

// Bar Component Function
function Bar({ title, value, profit }) {
  return (
    <>
      <Box py={4} px={[0, 20]}>
        <Heading size={'sm'} children={title} mb={2} />
        <HStack w={'full'} alignItems={'center'}>
          <Text children={profit ? '0%' : `-${value}%`} />
          <Progress
            width={'full'}
            value={profit ? value : 0}
            colorScheme="orange"
          />
          <Text children={`${value > 100 ? value : 100}%`} />
        </HStack>
      </Box>
    </>
  );
}
