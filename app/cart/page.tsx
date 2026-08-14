'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { products } from '@/lib/products';

export default function Cart() {
  const [items, setItems] = useState<{ productId: string; quantity: number }[]>([]);
  useEffect(() => setItems(JSON.parse(window.localStorage.getItem('morrow-cart') || '[]')), []);
  const detailed = items.map((item) => ({ ...item, product: products.find((product) => product.id === item.productId) })).filter((item) => item.product);
  const total = detailed.reduce((sum, item) => sum + (item.product?.price || 0) * item.quantity, 0);
  function update(productId: string, quantity: number) { const next = items.map((item) => item.productId === productId ? { ...item, quantity } : item).filter((item) => item.quantity > 0); setItems(next); window.localStorage.setItem('morrow-cart', JSON.stringify(next)); }
  return <main className="container py-14 max-w-4xl"><p className="text-xs uppercase tracking-[.25em] text-accent">Your selection</p><h1 className="mt-3 text-5xl">Shopping cart</h1>{!detailed.length ? <div className="py-24 text-center"><p className="text-black/55">Your cart is empty.</p><Link href="/shop" className="inline-block mt-6 bg-ink px-6 py-3 text-white">Browse products</Link></div> : <div className="mt-12 grid md:grid-cols-[1fr_280px] gap-12"><div className="space-y-6">{detailed.map((item) => <div key={item.productId} className="flex gap-5 border-b border-black/10 pb-6"><div className="w-24 h-28 bg-cover bg-center" style={{ backgroundImage: 'url(' + item.product!.image + ')' }} /><div className="flex-1"><p className="font-medium">{item.product!.name}</p><p className="text-sm text-black/50">{item.product!.category}</p><p className="mt-2">${item.product!.price * item.quantity}</p><div className="mt-3 flex items-center gap-3"><button className="border px-2" onClick={() => update(item.productId, item.quantity - 1)}>−</button><span>{item.quantity}</span><button className="border px-2" onClick={() => update(item.productId, item.quantity + 1)}>+</button><button className="ml-3 text-sm underline" onClick={() => update(item.productId, 0)}>Remove</button></div></div></div>)}</div><aside className="h-fit bg-white p-6"><div className="flex justify-between"><span>Total</span><strong>${total}</strong></div><p className="mt-3 text-sm text-black/50">Payment is disabled for this college project.</p></aside></div>}</main>;
}
