import { AiFillStar } from 'react-icons/ai';
import classes from './testimonials.module.css';
import { Box, Text, Flex } from '@chakra-ui/react';

export default function TestimonialItem(props) {
  return (
    <Box w="100%" display="inline-block" className={classes.slideBox}>
      <Box
        p={{ xl: '65px', base: '20px' }}
        w={{ xl: '750px', base: '350px' }}
        h="350px"
        gap="10px"
        bg="white"
        key={props.id}
        textAlign="center"
      >
        <Text fontWeight="semibold">{props.description}</Text>

        <Flex flexDir="row" color="#EBD8B8">
          <AiFillStar className={classes.icon} />
          <AiFillStar className={classes.icon} />
          <AiFillStar className={classes.icon} />
          <AiFillStar className={classes.icon} />
          <AiFillStar className={classes.icon} />
        </Flex>

        <Flex flexDir="row" gap={4}>
          <Text fontWeight="bold" fontSize="2xl">
            {props.name}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
