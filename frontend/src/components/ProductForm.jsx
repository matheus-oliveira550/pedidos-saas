import { useState } from 'react';
import { createProduct } from '../api';

export default function ProductForm({ onCreated }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('pizza');

  async function handleSubmit(e) {
    e.preventDefault();
    const newProduct = await createProduct({
      name,
      description,
      price: Number(price),
      category
    });
    onCreated(newProduct);
    setName('');
    setDescription('');
    setPrice('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Preço" type="number" step="0.01" required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="pizza">Pizza</option>
        <option value="hamburguer">Hambúrguer</option>
        <option value="bebida">Bebida</option>
      </select>
      <button type="submit">Adicionar produto</button>
    </form>
  );
}