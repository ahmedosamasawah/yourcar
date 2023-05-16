import { BiCarousel } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import classes from './CarsSection.module.css';
import { cartActions } from '../../Store/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Text, Button, Flex } from '@chakra-ui/react';

export default function CarItemCard(props) {
  let quantity = 0;

  const hover = effect => {
    return {
      ':hover': {
        bg: effect,
      },
    };
  };

  const carItems = useSelector(state => state.items);

  const { type, image, title, id, luggage, seats, description } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        type,
        title,
        image,
      })
    );
  };

  const deleteItemHandler = () => {
    quantity > 0 && dispatch(cartActions.deleteItemFromCart(id));
  };

  return (
    <Flex
      className={classes.carItem}
      bg="white"
      px="25px"
      boxShadow="xl"
      h={{ xl: '650px', base: '550px' }}
      w={{ xl: '500px', base: '500px' }}
      p="6"
      rounded="md"
    >
      <Box w={{ xl: '100%', base: '90%' }}>
        <img src={image} alt="car img" style={{ width: '100%' }} />
      </Box>

      <Box>
        <Flex gap="25px" mb="35px">
          <Box as="header" textAlign="center" mt="-20px">
            <Text
              fontWeight="bold"
              color="red.700"
              fontSize={{ xl: '2xl', base: 'xl' }}
            >
              {title}
            </Text>
            <Text fontSize="sm">{type}</Text>
          </Box>

          <Text fontSize="md" textAlign="left">
            {description}
          </Text>

          <Grid
            mt="-10px"
            alignSelf="start"
            templateColumns="repeat(2, 1fr)"
            gap={{ xl: '150px', base: '80px' }}
          >
            <Flex>
              <Flex alignItems="flex-start">
                <Flex alignItems="center" flexDir="row" gap="15px" mb="-10px">
                  <Box fontSize={{ xl: '2xl', base: 'md' }}>
                    <BsPeopleFill />
                  </Box>
                  <Text color="red.700" mb="-8px">
                    {seats} Seats
                  </Text>
                </Flex>
                <Flex gap="15px" alignItems="center" flexDir="row">
                  <Box fontSize={{ xl: '2xl', base: 'md' }}>
                    <BiCarousel />
                  </Box>
                  <Text color="red.700" mb="-8px">
                    {luggage}
                  </Text>
                  <p
                    style={{
                      color: '#741906',
                      marginLeft: '-8px',
                      marginBottom: '-5px',
                    }}
                  >
                    Luggage
                  </p>
                </Flex>
              </Flex>
            </Flex>

            <Flex flexDir="row" alignItems="center" alignSelf="end">
              <Button
                borderTopRightRadius="0"
                borderBottomRightRadius="0"
                h="35px"
                pb="5px"
                w="5px"
                bg="red.700"
                color="white"
                fontSize="3xl"
                sx={hover('red.600')}
                onClick={deleteItemHandler}
              >
                -
              </Button>

              <Text
                fontSize="xl"
                fontWeight="bold"
                bg="gray.100"
                h="35px"
                w="35px"
                textAlign="center"
              >
                {carItems &&
                  carItems.map(item => {
                    if (item.id === id) quantity = item.quantity;
                  })}
                {quantity}
              </Text>
              <Button
                h="35px"
                borderTopLeftRadius="0"
                borderBottomLeftRadius="0"
                w="12.5px"
                bg="red.700"
                pb="5px"
                color="white"
                fontSize="3xl"
                sx={hover('red.600')}
                onClick={addToCartHandler}
              >
                +
              </Button>
            </Flex>
          </Grid>
        </Flex>
      </Box>
    </Flex>
  );
}
