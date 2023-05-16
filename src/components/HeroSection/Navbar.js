import { useState } from 'react';
import classes from './Nav.module.css';
import { useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { Button, Flex, HStack, Spacer, Text } from '@chakra-ui/react';

export default function Navbar(props) {
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  const navBtnStyle = {
    h: '15px',
    bg: 'none',
    px: '14px',
    py: '18px',
    fontWeight: 'bold',
    fontFamily: 'Noto sans',
    ':hover, :active': { bg: 'red.900' },
  };

  window.addEventListener('scroll', setFixed);

  const totalQuantity = useSelector(state => state.totalQuantity);

  return (
    <Flex
      className={fix ? `${classes.fixed}` : `${classes.nav}`}
      position="sticky"
      top="0"
      boxShadow="2xl"
      w={{
        base: '390px', // Mobile
        xl: '1440px',
      }}
      as="nav"
      pt="30px"
      pb="10px"
      px={{
        base: '20px', // Mobile
        md: '20px',
        lg: '40px',
        xl: '70px',
      }}
      alignItems="center"
    >
      <Text
        className={fix ? classes.textFixed : ''}
        top={{
          base: '5', // Mobile
          md: '5',
          lg: '4',
          xl: '13',
        }}
        color={{
          base: '#12273d', // Mobile
          xl: 'white',
        }}
        fontSize={{
          base: 'xl', // Mobile
          md: 'xl',
          lg: '2xl',
          xl: '3xl',
        }}
        position="absolute"
        fontFamily="Nunito sans"
      >
        <a href="http://www.kbelmarsos.org/">
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
      </Text>

      <Spacer />
      <HStack
        mt="-10px"
        spacing={{
          base: '1', // Mobile
          md: '1',
          lg: '3',
          xl: '6',
        }}
      >
        <Button
          className={fix ? classes.textFixed : ''}
          sx={navBtnStyle}
          fontSize={{
            base: 'md', // Mobile
            md: 'lg',
            lg: 'xl',
            xl: '2xl',
          }}
          color={{
            base: '#12273d', // Mobile
            xl: 'white',
          }}
          display={{ base: 'none', xl: 'inherit' }}
        >
          <a href="#heroSec">Home</a>
        </Button>
        <Button
          className={fix ? classes.textFixed : ''}
          sx={navBtnStyle}
          fontSize={{
            base: 'md', // Mobile
            md: 'lg',
            lg: 'xl',
            xl: '2xl',
          }}
          color={{
            base: '#12273d', // Mobile
            xl: 'white',
          }}
          display={{ base: 'none', xl: 'inherit' }}
        >
          <a href="#aboutSec">About</a>
        </Button>
        <Button
          className={fix ? classes.textFixed : ''}
          sx={navBtnStyle}
          fontSize={{
            base: 'md', // Mobile
            md: 'lg',
            lg: 'xl',
            xl: '2xl',
          }}
          color={{
            base: '#12273d', // Mobile
            xl: 'white',
          }}
          display={{ base: 'none', xl: 'inherit' }}
        >
          <a href="#servicesSec">Services</a>
        </Button>
        <Button
          className={fix ? classes.textFixed : ''}
          sx={navBtnStyle}
          fontSize={{
            base: 'md', // Mobile
            md: 'lg',
            lg: 'xl',
            xl: '2xl',
          }}
          color={{
            base: '#12273d', // Mobile
            xl: 'white',
          }}
          display={{ base: 'none', xl: 'inherit' }}
        >
          <a href="#carsSec">Cars</a>
        </Button>
        <Button
          className={fix ? classes.textFixed : ''}
          sx={navBtnStyle}
          fontSize={{
            base: 'md', // Mobile
            md: 'lg',
            lg: 'xl',
            xl: '2xl',
          }}
          color={{
            base: '#12273d', // Mobile
            xl: 'white',
          }}
          display={{ base: 'none', xl: 'inherit' }}
        >
          <a href="#footer">Contact us</a>
        </Button>
        <Button
          onClick={props.onClick}
          className={fix ? classes.textFixed : ''}
          sx={navBtnStyle}
          fontSize={{
            base: 'lg', // Mobile
            md: 'xl',
            lg: '2xl',
            xl: '3xl',
          }}
          pos="relative"
          color={{
            base: '#12273d', // Mobile
            xl: 'white',
          }}
        >
          <p>
            <RiShoppingCart2Line />
          </p>
          <Text
            color="#12273d"
            p={1}
            borderRadius={5}
            bg="#EBD8B8"
            fontSize="11px"
            right={2}
            pos="absolute"
            top={0}
          >
            {totalQuantity}
          </Text>
        </Button>
        <Button
          display={{ xl: 'none', base: 'inherit' }}
          onClick={props.onOpen}
          className={fix ? classes.textFixed : ''}
          sx={navBtnStyle}
          fontSize={{
            base: 'lg', // Mobile
            md: 'xl',
            lg: '2xl',
            xl: '3xl',
          }}
          pos="relative"
          color={{
            base: '#12273d', // Mobile
            xl: 'white',
          }}
        >
          <p>
            <GiHamburgerMenu />
          </p>
        </Button>
      </HStack>
    </Flex>
  );
}
