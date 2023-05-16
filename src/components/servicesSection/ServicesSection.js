import { IoDiamond } from 'react-icons/io5';
import { BsListStars } from 'react-icons/bs';
import { RiHandCoinFill } from 'react-icons/ri';
import classes from './ServicesSection.module.css';

import { Box, Text, Flex, Heading, Grid, GridItem } from '@chakra-ui/react';

export default function ServicesSection() {
  return (
    <Box
      as="section"
      w={{
        base: '390px', // Mobile
        xl: '1440px',
      }}
      mb={{ xl: '200px', base: '140px' }}
      id="servicesSec"
    >
      <Box as="main" p={{ xl: '50px', base: '20px' }} className={classes.bgImg}>
        <Heading
          left={{
            xl: '34%',
            base: '20%',
          }}
          opacity="0.6"
          fontSize={{
            xl: '112px',
            base: '6xl',
          }}
          color="white"
          fontFamily="Nora"
          position="absolute"
        >
          SERVICES
        </Heading>
        <Heading
          mt={{ xl: '85px', base: '45px' }}
          fontSize={{ xl: '5xl', base: '4xl' }}
          fontFamily="Nora"
          color="green.900"
          textAlign="center"
        >
          Services
        </Heading>
        <Grid
          gap={{
            xl: '150px',
            base: '50px',
          }}
          templateColumns={{
            xl: 'repeat(3, 1fr)',
            base: '1fr',
          }}
          my={{ xl: '80px', base: '15' }}
          mb={{ base: '90px' }}
        >
          <GridItem colSpan="1">
            <Flex gap="30px">
              <Text fontSize="8xl">
                <BsListStars />
              </Text>
              <Heading fontSize="3xl">Car sales</Heading>
              <Text textAlign="center" fontSize="xl">
                At YourCar, we offer a wide selection of luxury vehicles for
                sale. Whether you're in the market for a sleek sports car or a
                spacious SUV, we have the perfect vehicle to fit your needs.
              </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan="1">
            <Flex gap="30px">
              <Text fontSize="8xl" transform="rotate(180deg)">
                <RiHandCoinFill />
              </Text>
              <Heading fontSize="3xl"> Car rental </Heading>
              <Text textAlign="center" fontSize="xl">
                If you're in need of a luxury car rental, look no further than
                YourCar. Our fleet of high-end vehicles is regularly maintained
                and serviced to ensure that you have a safe and comfortable
                driving experience.
              </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan="1">
            <Flex gap="30px">
              <Text fontSize="8xl">
                <IoDiamond />
              </Text>
              <Heading fontSize="3xl"> Car selling </Heading>
              <Text textAlign="center" fontSize="xl">
                At YourCar, we make it easy to sell your car. Simply bring your
                vehicle in for an appraisal, and we'll handle the rest. We offer
                fair prices and a hassle-free selling process, so you can get
                your vehicle with minimal effort.
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
