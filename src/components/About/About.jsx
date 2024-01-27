import React from 'react';
import MetaData from '../../Meta/MetaData';
import {
  Avatar,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Founder from '../../assets/images/founder.jpg';

const About = () => {
  return (
    <>
      <MetaData title={'Learn Hub || About Learn Hub'} />
      <Container maxW={'90%'} padding="16" h={['max-content', 'max-content']}>
        <Heading children="ABOUT US" textAlign={['center', 'left']} />
        <Stack
          direction={['column', 'row']}
          spacing={['4', '16']}
          padding={'8'}
        >
          <VStack>
            <Avatar
              boxSize={['40', '48']}
              src={Founder}
              border={'6px solid gray'}
            />
            <Text children="Founder" opacity={0.7} />
          </VStack>
          <VStack
            justifyContent={'center'}
            alignItems={['center', 'flex-start']}
          >
            <Heading children="Ritik Kumar Pathak" size={['md', 'xl']} />
            <Text
              children="Hello ! I am a passionate Full Stack Developer and UI Designer.   Our Mission Is To provide quality content on the reasonable price"
              textTransform={'capitalize'}
              textAlign={['center', 'left']}
            />
          </VStack>
        </Stack>
        <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
          <Text>
            Empower your workforce with our cutting-edge Learning Management
            System, designed for seamless knowledge acquisition. Elevate
            training efficiency through intuitive course navigation, interactive
            content, and robust analytics. Foster a culture of continuous
            learning with our user-friendly platform, driving skill development
            and organizational excellence
          </Text>
        </Stack>
        <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
          <Text>
            Revolutionize employee development with our Learning Management
            System. Streamline training workflows, deliver engaging content, and
            track progress effortlessly. Enhance collaboration through forums
            and assessments. Experience a scalable solution tailored to your
            organization's needs, fostering a dynamic learning environment that
            propels growth and expertise across your teams.
          </Text>
        </Stack>
        <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
          <Text>
            Unleash the full potential of your team with our state-of-the-art
            Learning Management System. Effortlessly manage training programs,
            track progress, and engage learners with interactive content.
            Tailored to your unique needs, our platform ensures a seamless
            learning experience, driving skill development, compliance, and
            organizational success.
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default About;
