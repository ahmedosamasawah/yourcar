import jsonData from '../../assets/data.json';
import classes from './testimonials.module.css';
import TestimonialItem from './TestimonialItem';
import { useState, useEffect, useRef } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import testimonialImg from '../../assets/car4.png';

const delay = 2500;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const testimonialsData = jsonData.testimonials;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveIndex(prevIndex =>
          prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex, testimonialsData]);

  return (
    <Box
      maxW={{
        base: '390px', // Mobile
        xl: '1440px',
      }}
      className={classes.carousel}
    >
      <Box py={{ xl: '50px', base: '20px' }}>
        <Heading
          right={{ xl: '-115%', base: '-46%' }}
          opacity="0.1"
          fontSize={{
            xl: '112px',
            base: '5xl',
          }}
          color="#EBEBEB"
          fontFamily="Nora"
          position="absolute"
        >
          TESTIMONIALS
        </Heading>
        <Heading
          mt={{ xl: '85px', base: '50px' }}
          fontSize={{
            xl: '5xl',
            base: '4xl',
          }}
          fontFamily="Nora"
          color="#EBEBEB"
          textAlign="center"
        >
          Testimonials
        </Heading>
      </Box>

      <Flex
        flexDir="row"
        mb="30px"
        gap={{ xl: '200', base: '50' }}
        className={classes.inner}
        // style={{ transform: `translate3d(${-activeIndex * 15}%, 0, 0)` }}
        style={{
          transform: `translate3d(${
            -activeIndex *
            `${window.matchMedia('(max-width: 500px)').matches ? 9 : 15}`
          }%, 0, 0)`,
        }}
      >
        {testimonialsData &&
          testimonialsData.map((testimonial, index) => (
            <TestimonialItem
              key={index}
              id={index}
              name={testimonial.name}
              description={testimonial.description}
            />
          ))}
      </Flex>

      <img
        className={classes.testimonialImg}
        alt="car img"
        src={testimonialImg}
      />

      <Flex flexDir="row" gap="10px" mt="30px" className={classes.indicators}>
        {testimonialsData &&
          testimonialsData.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={index === activeIndex ? classes.active : ''}
            />
          ))}
      </Flex>
    </Box>
  );
}
