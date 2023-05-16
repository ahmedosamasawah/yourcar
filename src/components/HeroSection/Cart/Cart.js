import CartItem from './CartItem';
import classes from './Cart.module.css';
import { DeleteIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../Store/CartSlice';
import { Button, List, ListIcon, SlideFade, Spacer } from '@chakra-ui/react';

export default function Cart(props) {
  const carItems = useSelector(state => state.items);

  const hover = effect => {
    return {
      ':hover': {
        bg: effect,
      },
    };
  };

  const dispatch = useDispatch();

  const emptyCartHandler = () => {
    dispatch(cartActions.emptyCart());
  };

  return (
    <SlideFade className={classes.background} offsetY="200px" in={props.isOpen}>
      {carItems &&
        carItems.map((item, index) => (
          <CartItem
            key={index}
            item={{
              image: item.image,
              type: item.type,
              title: item.title,
              quantity: item.quantity,
              id: item.id,
            }}
          />
        ))}

      <Spacer />
      <List>
        <Button
          mb="50px"
          bg="red.700"
          color="white"
          onClick={emptyCartHandler}
          sx={hover('red.600')}
        >
          Delete All <ListIcon ml="10px" as={DeleteIcon} />
        </Button>
      </List>
    </SlideFade>
  );
}
