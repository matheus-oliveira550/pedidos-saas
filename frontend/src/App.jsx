import { useState, useEffect } from 'react';
import { getProducts, getOrders } from './api';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';

export default function App() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
    getOrders().then(setOrders);
  }, []);

  function handleProductCreated(newProduct) {
    setProducts([...products, newProduct]);
  }

  function handleProductDeleted(id) {
    setProducts(products.filter((p) => p._id !== id));
  }

  function handleOrderStatusChanged(updatedOrder) {
    setOrders(orders.map((o) => (o._id === updatedOrder._id ? updatedOrder : o)));
  }

  return (
    <div>
      <h1>Painel da pizzaria</h1>

      <h2>Produtos</h2>
      <ProductForm onCreated={handleProductCreated} />
      <ProductList products={products} onDeleted={handleProductDeleted} />

      <h2>Pedidos</h2>
      <OrderList orders={orders} onStatusChanged={handleOrderStatusChanged} />
    </div>
  );
}