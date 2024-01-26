import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py="4" width="100%">
      <Flex justifyContent="space-evenly" alignItems="center">
        <Flex direction="column" alignItems="center">
          <Text fontSize="lg" fontWeight="bold">
            Learn Hub
          </Text>
          <Text fontSize="sm" mt={2}>
            E-2,Mayur Vihar
          </Text>
          <Text fontSize="sm" mt={2}>
            Ashoka Garden
          </Text>
          <Text fontSize="sm" mt={2}>
            Bhopal,Madhya Pradesh
          </Text>
        </Flex>

        <Flex direction="column" alignItems="center">
          <Text fontSize="lg" fontWeight="bold">
            Quick Links
          </Text>
          <Link href="#" fontSize="sm" mt="2">
            Home
          </Link>
          <Link href="#" fontSize="sm" mt="2">
            About Us
          </Link>
          <Link href="#" fontSize="sm" mt="2">
            Contact
          </Link>
        </Flex>

        <Flex direction="column" alignItems="center">
          <Text fontSize="lg" fontWeight="bold">
            Social Media
          </Text>
          <Link href="#" fontSize="sm" mt="2">
            Twitter
          </Link>
          <Link href="#" fontSize="sm" mt="2">
            Facebook
          </Link>
          <Link href="#" fontSize="sm" mt="2">
            Instagram
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
