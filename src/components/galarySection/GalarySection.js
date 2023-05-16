import G1 from '../../assets/Galary1.png';
import G2 from '../../assets/Galary2.png';
import G3 from '../../assets/Galary3.png';
import G4 from '../../assets/Galary4.png';
import G5 from '../../assets/Galary5.png';
import G6 from '../../assets/Galary6.png';
import G7 from '../../assets/Galary7.png';
import G8 from '../../assets/Galary8.png';
import G9 from '../../assets/Galary9.png';
import classes from './GalarySection.module.css';
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react';

export default function GalarySection() {
  const heroBtn = {
    bg: 'transparent',
    border: '1px',
    ':hover': { bg: 'red.900' },
  };

  return (
    <section className={classes.galarySec}>
      <Flex flexDir="row" mb="-10px">
        <Box
          display={{
            base: 'none',
            xl: 'block',
          }}
          overflow="hidden"
        >
          <img alt="car img" src={G1} />
        </Box>

        <Box overflow="hidden">
          <img alt="car img" src={G2} />
        </Box>

        <Box
          display={{
            base: 'none',
            xl: 'block',
          }}
          overflow="hidden"
        >
          <img alt="car img" src={G3} />
        </Box>
      </Flex>
      <Flex flexDir="row" mt="0px" mb="-10px">
        <Box
          display={{
            base: 'none',
            xl: 'block',
          }}
          overflow="hidden"
        >
          <img alt="car img" src={G4} />
        </Box>

        <Box overflow="hidden">
          <img alt="car img" src={G5} />
        </Box>

        <Box
          display={{
            base: 'none',
            xl: 'block',
          }}
          overflow="hidden"
        >
          <img alt="car img" src={G6} />
        </Box>
      </Flex>
      <Flex flexDir="row" mt="0px">
        <Box
          display={{
            base: 'none',
            xl: 'block',
          }}
          overflow="hidden"
        >
          <img alt="car img" src={G7} />
        </Box>

        <Box overflow="hidden">
          <img alt="car img" src={G8} />
        </Box>

        <Box
          display={{
            base: 'none',
            xl: 'block',
          }}
          overflow="hidden"
        >
          <img alt="car img" src={G9} />
        </Box>
      </Flex>
      <Box
        color="white"
        left={{ xl: '42%', base: '9%' }}
        bottom={{ xl: '42%', base: '37%' }}
        as="header"
        textAlign="center"
        position="absolute"
      >
        <Heading mb="10px">Tesla Model 3</Heading>
        <Text mb="20px">Disruptive, avant-garde, futuristic, innovative.</Text>
        <Button
          sx={heroBtn}
          fontSize={{
            base: 'xs', // Mobile
            md: 'sm',
            lg: 'xl',
            xl: 'xl',
          }}
        >
          <a href="#footer">Cotact</a>
        </Button>
      </Box>
    </section>
  );
}
