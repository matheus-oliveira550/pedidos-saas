import { deleteProduct } from '../api';

export default function ProductList({ products, onDeleted }) {
  async function handleDelete(id) {
    await deleteProduct(id);
    onDeleted(id);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product._id}>
          <strong>{product.name}</strong> — R$ {product.price.toFixed(2)} ({product.category})
          <button onClick={() => handleDelete(product._id)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}