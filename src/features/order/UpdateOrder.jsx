import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Add Priority</Button>
    </fetcher.Form>
  );
}

export async function action({ params, request }) {
  const data = { priority: true };

  updateOrder(params.orderId, data);
  return null;
}
