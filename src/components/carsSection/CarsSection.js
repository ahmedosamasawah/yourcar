import { useState } from 'react';
import CarItemCard from './CarItemCard';
import jsonData from '../../assets/data.json';
import classes from './CarsSection.module.css';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  Heading,
  GridItem,
  Button,
  List,
  ListIcon,
} from '@chakra-ui/react';

export default function CarsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const hover = effect => {
    return {
      ':hover': {
        bg: effect,
      },
    };
  };

  const updateIndex = newIndex => {
    newIndex < 0 && (newIndex = 0);
    window.innerWidth < 700
      ? newIndex >= carsData.length && (newIndex = carsData.length - 1)
      : newIndex >= carsData.length / 3 && (newIndex = carsData.length / 3 - 1);

    setActiveIndex(newIndex);
  };

  const carsData = jsonData.cars;

  let dots = [];

  if (window.innerWidth < 700) {
    for (let i = 1; i <= carsData.length; i++) {
      dots.push(document.createElement('button'));
    }
  } else {
    for (let i = 1; i <= carsData.length / 3; i++) {
      dots.push(document.createElement('button'));
    }
  }

  return (
    <Box
      as="section"
      bg="gray.50"
      mt="-199px"
      w={{
        base: '390px', // Mobile
        xl: '1440px',
      }}
      id="carsSec"
      className={classes.carousel}
    >
      <Box
        as="main"
        px="50px"
        pb="20px"
        mt={{ xl: '30px', base: '10px' }}
        position="relative"
      >
        <Heading
          top={{ xl: '-39', base: '-2' }}
          left={{ xl: '39%', base: '28%' }}
          position="absolute"
          fontSize={{
            xl: '112px',
            base: '6xl',
          }}
          fontFamily="Nora"
          color="#828282"
          opacity="0.1"
        >
          CARS
        </Heading>
        <Heading
          fontSize={{
            xl: '5xl',
            base: '4xl',
          }}
          color="red.700"
          fontFamily="Nora"
          my="30px"
          textAlign="center"
        >
          Cars
        </Heading>

        <Flex
          flexDir="row"
          style={{
            transform: `translate3d(${
              -activeIndex *
              `${window.matchMedia('(max-width: 500px)').matches ? 128 : 103}`
            }%, 0, 0)`,
          }}
          className={classes.inner}
          gap={5}
        >
          {carsData &&
            carsData.map((carData, index) => {
              return (
                <CarItemCard
                  key={index}
                  id={index}
                  type={carData.name}
                  image={carData.image}
                  seats={carData.seats}
                  title={carData.class}
                  luggage={carData.luggage}
                  description={carData.description}
                />
              );
            })}
        </Flex>

        <Flex flexDir="row" gap="15px" mt="10px" className={classes.dotBox}>
          {dots.map((dot, index) => (
            <button
              key={index}
              onClick={() => updateIndex(index)}
              className={index === activeIndex ? classes.active : ''}
            />
          ))}
        </Flex>
      </Box>

      <GridItem
        display={{
          base: 'none',
          xl: 'block',
        }}
      >
        <Button
          bottom="440"
          left="4"
          position="absolute"
          h="40px"
          w="40px"
          pb="6px"
          boxShadow="dark-lg"
          pr="10px"
          bg="red.700"
          color="white"
          fontSize="3xl"
          borderRadius="100px"
          sx={hover('red.600')}
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <List>
            <ListIcon>
              <ChevronLeftIcon />
            </ListIcon>
          </List>
        </Button>
      </GridItem>
      <GridItem
        display={{
          base: 'none',
          xl: 'block',
        }}
      >
        <Button
          bottom="440"
          right="4"
          position="absolute"
          borderRadius="100px"
          h="40px"
          w="40px"
          pb="6px"
          pr="6px"
          bg="red.700"
          color="white"
          boxShadow="dark-lg"
          fontSize="3xl"
          sx={hover('red.600')}
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <List>
            <ListIcon>
              <ChevronRightIcon />
            </ListIcon>
          </List>
        </Button>
      </GridItem>
    </Box>
  );
}
