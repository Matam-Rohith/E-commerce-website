import { products, categories } from '@/lib/products';
import { Card } from '@/components/card';

export default function Shop() {
  return <main className="container py-14"><p className="text-xs uppercase tracking-[.25em] text-accent">The collection</p><h1 className="mt-3 text-5xl">Shop by section</h1><p className="mt-5 max-w-xl text-black/60">Browse electronics, clothing, utensils, and home essentials. Add any item directly to your cart.</p><div className="mt-12 space-y-20">{categories.map((category) => <section key={category} id={category.toLowerCase().replaceAll(' ', '-')}><div className="flex items-end justify-between border-b border-black/10 pb-4"><div><p className="text-xs uppercase tracking-[.2em] text-accent">Collection</p><h2 className="mt-2 text-3xl">{category}</h2></div><span className="text-sm text-black/50">{products.filter((product) => product.category === category).length} items</span></div><div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">{products.filter((product) => product.category === category).map((product) => <Card key={product.id} p={product} />)}</div></section>)}</div></main>;
}
