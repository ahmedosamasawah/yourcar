import {
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';

import classes from './Footer.module.css';
import { ImLocation2 } from 'react-icons/im';
import { MdCall, MdEmail } from 'react-icons/md';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook, BsYoutube } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer>
      <Grid
        px="100px"
        templateColumns="repeat(7, 1fr)"
        maxW={{
          base: '390px', // Mobile
          xl: '1440px',
        }}
        mb="25px"
        gap={19}
      >
        <GridItem colSpan={{ xl: '2', base: '7' }}>
          <Flex
            alignItems={{ xl: 'flex-start', base: 'center' }}
            gap={{ xl: '5', base: '3' }}
          >
            <Heading
              fontFamily="Nunito sans"
              color="red.700"
              fontSize={{ xl: '2xl', base: '4xl' }}
            >
              <a href="#heroSec">
                <p
                  style={{
                    fontWeight: 'bolder',
                    display: 'inline-block',
                  }}
                >
                  Your
                </p>
                <p style={{ display: 'inline-block' }}>Car</p>
              </a>
            </Heading>
            <Text textAlign={{ xl: 'left', base: 'center' }}>
              We are known for luxurious and premium chaffeur services
              worldwide. We are simply the best you can find.
            </Text>
            <Text textAlign={{ xl: 'left', base: 'center' }}>
              we are dedicated to providing our customers with a first-class car
              buying, selling, and renting experience.
            </Text>
          </Flex>
        </GridItem>

        <GridItem colSpan={{ xl: '3', base: '7' }}>
          <Flex
            alignItems="center"
            gap={{ xl: '20px', base: '10px' }}
            textAlign="center"
          >
            <Heading fontFamily="Nunito sans" color="red.700" fontSize="2xl">
              News Letter
            </Heading>
            <Text>
              Subscribe to our news letter for <br />
              updates, news and exclusive offers
            </Text>
            <FormControl display="flex" gap="8px" flexDir={{ xl: 'row' }}>
              <Input
                focusBorderColor="red.700"
                py="21px"
                borderRadius="0"
                borderColor="red.700"
                type="email"
                name="Email"
                placeholder="Email"
              />
              <Button
                w="140px"
                h="44px"
                borderRadius="0"
                color="white"
                bg="red.700"
                _hover={{ bg: 'red.600' }}
              >
                Subscribe
              </Button>
            </FormControl>
            <Flex flexDir="row" gap="20px">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/ahmedossamasawah"
              >
                <BsFacebook className={classes.socialIcon} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/@ahmedossamasawah"
              >
                <BsYoutube className={classes.socialIcon} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/ahmedossamasawah/"
              >
                <AiOutlineInstagram className={classes.socialIcon} />
              </a>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem colSpan={{ xl: '2', base: '7' }} mt="-2">
          <Heading
            fontFamily="Nunito sans"
            textAlign="center"
            mt={{ xl: '0', base: '20px' }}
            color="red.700"
            fontSize="2xl"
          >
            Contact
          </Heading>
          <Flex alignItems="start" gap={1}>
            <Flex flexDir="row" alignItems="center" gap={4}>
              <ImLocation2 />
              <Text>
                2038 2nd Avenue, <br /> Las Vegas, United States
              </Text>
            </Flex>
            <Flex flexDir="row" alignItems="center" gap={4}>
              <MdCall />
              <Text>
                01444773421423 <br /> 01477678449405
              </Text>
            </Flex>
            <Flex flexDir="row" alignItems="center" gap={4}>
              <MdEmail />
              <Text>info@YourCar.com</Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem
          borderBottom="2px"
          borderColor="red.700"
          colSpan={7}
        ></GridItem>
      </Grid>
      <Text fontSize="sm" mb="100px" textAlign="center">
        © Copyright 2023 · <strong> YourCar </strong>All rights reserved{' '}
      </Text>
    </footer>
  );
}
