import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';
import { useDispatch } from 'react-redux';

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  const handleDeleteItem = () => dispatch(deleteItem(pizzaId));

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}
