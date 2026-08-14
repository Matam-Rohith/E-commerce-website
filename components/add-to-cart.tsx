'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export function AddToCart({ productId, compact = false }: { productId: string; compact?: boolean }) {
  const [added, setAdded] = useState(false);
  const router = useRouter();
  function addToCart() {
    const current = JSON.parse(window.localStorage.getItem('morrow-cart') || '[]');
    const existing = current.find((item: { productId: string; quantity: number }) => item.productId === productId);
    if (existing) existing.quantity += 1; else current.push({ productId, quantity: 1 });
    window.localStorage.setItem('morrow-cart', JSON.stringify(current));
    setAdded(true); window.setTimeout(() => setAdded(false), 1400); router.refresh();
  }
  return <button onClick={addToCart} className={compact ? 'mt-3 w-full border border-ink py-2 text-sm hover:bg-ink hover:text-white transition' : 'mt-8 bg-ink text-white px-7 py-3 hover:bg-accent transition'}>{added ? 'Added to cart' : 'Add to cart'}</button>;
}
