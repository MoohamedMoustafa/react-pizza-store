import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

export default function UpdateQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };
  const handleDec = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDec}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={handleInc}>
        +
      </Button>
    </div>
  );
}
