import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProduct, products } from '@/lib/products';
import { AddToCart } from '@/components/add-to-cart';

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export default function Product({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) return notFound();
  return <main className="container py-14 grid md:grid-cols-2 gap-12"><div className="relative aspect-square"><Image src={product.image} alt={product.name} fill className="object-cover" priority /></div><div><p className="text-accent uppercase tracking-[.25em] text-xs">{product.category}</p><h1 className="mt-4 text-5xl">{product.name}</h1><p className="mt-6 text-xl">${product.price}</p><p className="mt-6 text-black/60 leading-7">{product.description}</p><AddToCart productId={product.id} /></div></main>;
}
