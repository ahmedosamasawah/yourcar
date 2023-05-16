import classes from './AboutSection.module.css';
import aboutImg from '../../assets/pngegg 1.png';
import { Box, Heading, Grid, GridItem, Flex, Text } from '@chakra-ui/react';

export default function AboutSection() {
  return (
    <Box
      as="section"
      bg="gray.50"
      w={{
        base: '390px', // Mobile
        xl: '1440px',
      }}
      id="aboutSec"
    >
      <Box
        as="main"
        p={{
          xl: '50px',
          base: '20px',
        }}
        mt={{
          xl: '30px',
          base: '0px',
        }}
      >
        <Grid
          templateColumns={{
            xl: 'repeat(7, 1fr)',
            base: '1fr',
          }}
          gap={{
            xl: '100px',
            base: '10px',
          }}
        >
          <GridItem colSpan="4">
            <Heading
              position="absolute"
              top={{
                xl: '-81',
                base: '-7',
              }}
              left={{
                xl: '-13',
              }}
              fontSize={{
                xl: '112px',
                base: '6xl',
              }}
              fontFamily="Nora"
              color="red.900"
              opacity="0.1"
            >
              ABOUT US
            </Heading>
            <Flex
              alignItems={{
                xl: 'flex-start',
                base: 'center',
              }}
            >
              <Heading
                fontSize={{
                  xl: '5xl',
                  base: '4xl',
                }}
                color="red.700"
                fontFamily="Nora"
                mb={{
                  xl: '35px',
                  base: '20px',
                }}
              >
                About
              </Heading>
              <Text
                fontSize={{
                  xl: 'xl',
                  base: 'md',
                }}
                mb="20px"
              >
                YourCar is a luxury car dealership that offers a personalized
                and first-class experience to its clients. Our team of
                experienced professionals is dedicated to providing exceptional
                service and finding the perfect vehicle to match our clients'
                unique preferences and requirements. We have an extensive
                selection of high-end vehicles, ranging from sports cars to
                SUVs, all of which are maintained to the highest standards of
                quality and safety.
              </Text>
              <Text
                fontSize={{
                  xl: 'xl',
                  base: 'md',
                }}
              >
                At YourCar, we are committed to creating a stress-free and
                enjoyable car buying experience. We understand that purchasing a
                luxury car can be a significant investment, which is why we
                offer flexible financing options to make the process more
                manageable. Our team is available to answer any questions and
                provide guidance throughout the entire buying process. We take
                pride in our outstanding customer service and attention to
                detail, and we are confident that our clients will be satisfied
                with their experience at YourCar.
              </Text>
            </Flex>
          </GridItem>
          <GridItem className={classes.AboutSecImg} colSpan="3">
            <div>
              <img alt="car img" src={aboutImg} />
            </div>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
