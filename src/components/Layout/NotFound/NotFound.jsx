// NotFound.jsx
import { Center, Heading, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Center height="100vh">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { repeat: Infinity, duration: 1, repeatType: 'reverse' },
        }}
        exit={{ opacity: 0, y: -20 }}
      >
        <Heading fontSize="6xl" color="red.500">
          404 Not Found
        </Heading>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Button as={Link} to="/" colorScheme="teal" mt={4}>
          Go Home
        </Button>
      </motion.div>
    </Center>
  );
};

export default NotFound;
