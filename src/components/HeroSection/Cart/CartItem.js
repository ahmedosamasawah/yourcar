import { useDispatch } from 'react-redux';
import { DeleteIcon } from '@chakra-ui/icons';
import { cartActions } from '../../../Store/CartSlice';
import { Box, Text, Button, Flex, List, ListIcon } from '@chakra-ui/react';

export default function CartItem(props) {
  const dispatch = useDispatch();

  const hover = effect => {
    return {
      ':hover': {
        bg: effect,
      },
    };
  };

  const { title, type, image, id, quantity } = props.item;

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        type,
        image,
        title,
        quantity,
      })
    );
  };

  const deleteItemHandler = () => {
    dispatch(cartActions.deleteItemFromCart(id));
  };

  const removeItemCardHandler = () => {
    dispatch(cartActions.removeItemCardfromCart(id));
  };

  return (
    <Flex bg="white" w="90%" h="15%" flexDir="row">
      <Box w="55%" mt="-10px">
        <Flex w="130px" ml="-1" alignItems="flex-start">
          <Text fontWeight="bold" color="red.700">
            {title}
          </Text>
          <Text fontSize="xs">{type}</Text>
        </Flex>
        <Flex ml="3" mt="2" flexDir="row">
          <Button
            h="25px"
            mr="6px"
            bg="red.700"
            color="white"
            fontSize="xl"
            fontWeight="bold"
            sx={hover('red.600')}
            onClick={addItemHandler}
          >
            +
          </Button>
          <Text fontSize="xl" fontWeight="bold">
            {quantity}
          </Text>
          <Button
            h="25px"
            ml="6px"
            bg="red.700"
            color="white"
            fontSize="xl"
            fontWeight="bold"
            sx={hover('red.600')}
            onClick={deleteItemHandler}
          >
            -
          </Button>
          <List>
            <Button
              p="0"
              bg="transparent"
              fontSize="lg"
              onClick={removeItemCardHandler}
              sx={hover('none')}
            >
              <ListIcon ml="10px" as={DeleteIcon} />
            </Button>
          </List>
        </Flex>
      </Box>
      <Box justifySelf="flex-start" w="45%">
        <img src={image} alt="car img" style={{ width: '100%' }} />
      </Box>
    </Flex>
  );
}
