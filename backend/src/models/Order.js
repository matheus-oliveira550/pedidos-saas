import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 }
});

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  items: { type: [orderItemSchema], required: true },
  status: { type: String, enum: ['pendente', 'preparando', 'pronto', 'entregue'], default: 'pendente' },
  total: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);