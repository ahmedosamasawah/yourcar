import { useEffect } from 'react';
import WebFont from 'webfontloader';
import classes from './HeroSection.module.css';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  Text,
} from '@chakra-ui/react';

export default function HeroSection() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Lora', 'Nunito sans', 'Noto sans'],
      },
    });
  }, []);

  const heroBtn = {
    bg: 'transparent',
    border: '2px',
    ':hover': { bg: 'red.900' },
  };

  return (
    <Box
      id="heroSec"
      scrollBehavior="smooth"
      className={classes.bg}
      as="section"
      w={{
        base: '390px', // Mobile
        xl: '1440px',
      }}
      transition="transform 0.2s"
    >
      <div>
        <Flex
          pb={{
            base: '300px', // Mobile
            xl: '180px',
          }}
          mr={{
            base: '0px', // Mobile
            xl: '-620px',
          }}
          mt={{
            base: '120px', // Mobile
            xl: '165px',
          }}
          gap="20px"
          fontFamily="Lora"
          alignItems={{
            base: 'center', // Mobile
            xl: 'flex-end',
          }}
          fontWeight="extrabold"
          color="whiteAlpha.900"
        >
          <Heading
            textAlign={{ xl: 'right', base: 'center' }}
            fontSize={{
              base: '4xl', // Mobile
              md: '4xl',
              lg: '6xl',
              xl: '7xl',
            }}
            px={{ xl: '0', base: '5px' }}
            fontFamily="Lora"
          >
            Find the perfect car <br /> for you at YourCar.
          </Heading>

          <Text
            textAlign={{
              base: 'center', // Mobile
              xl: 'right',
            }}
            fontSize={{
              base: 'xl', // Mobile
              md: 'xl',
              lg: '2xl',
              xl: '3xl',
            }}
            bg={{
              base: 'rgba(14, 12, 11, 0.46)',
              xl: 'none',
            }}
            p={{
              base: '10px',
              xl: '0',
            }}
            mx={{
              base: '10px',
              xl: '',
            }}
            className={classes.heroContent}
          >
            We offer a wide range of <br /> cars that cater to your <br /> needs
            and budget. Visit <br /> us today and drive away <br /> with your
            dream car!
          </Text>

          <List>
            <Button
              sx={heroBtn}
              fontSize={{
                base: '2xl', // Mobile
                xl: '2xl',
              }}
              pos={{
                xl: 'static',
                base: 'absolute',
              }}
              bottom={{
                xl: '',
                base: '16',
              }}
              right={{
                xl: '',
                base: '24%',
              }}
            >
              <a href="#carsSec">Discover</a>
              <ListIcon
                ml="8px"
                transform=" rotate(0.9turn)"
                as={ArrowForwardIcon}
              />
            </Button>
          </List>
        </Flex>
      </div>
    </Box>
  );
}
