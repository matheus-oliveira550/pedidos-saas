import { updateOrderStatus } from '../api';

const STATUSES = ['pendente', 'preparando', 'pronto', 'entregue'];

export default function OrderList({ orders, onStatusChanged }) {
  async function handleStatusChange(id, status) {
    const updated = await updateOrderStatus(id, status);
    onStatusChanged(updated);
  }

  return (
    <ul>
      {orders.map((order) => (
        <li key={order._id}>
          <strong>{order.customerName}</strong> — R$ {order.total.toFixed(2)}
          <ul>
            {order.items.map((item, i) => (
              <li key={i}>{item.quantity}x {item.product?.name}</li>
            ))}
          </ul>
          <select value={order.status} onChange={(e) => handleStatusChange(order._id, e.target.value)}>
            {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </li>
      ))}
    </ul>
  );
}