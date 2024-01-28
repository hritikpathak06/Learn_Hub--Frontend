import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  RiCustomerService2Fill,
  RiDashboard2Fill,
  RiFileAddFill,
  RiUser2Fill,
} from 'react-icons/ri';

const Sidebar = () => {
    const location = useLocation();

  return (
    <>
      <VStack spacing={8} p={16} boxShadow={'-2px 0 10px rgba(0,0,10,0.5)'} >
        <DashboardLinkButton
          name={'Dashboard'}
          Icon={RiDashboard2Fill}
          link="dashboard"
          active={location.pathname==="/admin/dashboard"}
        />
        <DashboardLinkButton
          name={'Create Course'}
          Icon={RiFileAddFill}
          link="createcourse"
          active={location.pathname==="/admin/createcourse"}
        />
        <DashboardLinkButton
          name={'Courses'}
          Icon={RiCustomerService2Fill}
          link="courses"
          active={location.pathname==="/admin/courses"}
        />
        <DashboardLinkButton
          name={'Users'}
          Icon={RiUser2Fill}
          link="users"
          active={location.pathname==="/admin/users"}
        />
      </VStack>
    </>
  );
};

export default Sidebar;

// Function for all sidebar links
function DashboardLinkButton({ link, Icon, name,active }) {
  return (
    <NavLink to={`/admin/${link}`}>
      <Button color={active ? "#ffff" : "purple"} fontSize={'larger'} variant={!active ? "ghost" : null} colorScheme={active ? "purple" : ""}>
        <Icon style={{ margin: '4px' }} />
        {name}
      </Button>
    </NavLink>
  );
}
