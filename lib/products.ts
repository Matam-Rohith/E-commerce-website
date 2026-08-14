export type Product = { id: string; slug: string; name: string; category: string; price: number; image: string; description: string; featured?: boolean };

export const categories = ['Electronics', 'Clothing', 'Utensils', 'Home & Furniture'];

export const products: Product[] = [
  { id: '1', slug: 'linen-table-lamp', name: 'Linen Table Lamp', category: 'Home & Furniture', price: 129, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900', description: 'A warm sculptural glow for quiet evenings.', featured: true },
  { id: '2', slug: 'stoneware-carafe', name: 'Stoneware Carafe', category: 'Utensils', price: 68, image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=900', description: 'Hand-finished ceramic with an honest tactile form.', featured: true },
  { id: '3', slug: 'woven-weekend-tote', name: 'Woven Weekend Tote', category: 'Clothing', price: 94, image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=900', description: 'A durable relaxed carryall for days away.', featured: true },
  { id: '4', slug: 'oak-reading-stool', name: 'Oak Reading Stool', category: 'Home & Furniture', price: 210, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=900', description: 'Solid oak seating with a softened silhouette.' },
  { id: '5', slug: 'wireless-headphones', name: 'Wireless Headphones', category: 'Electronics', price: 149, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900', description: 'Comfortable over-ear sound for focused listening.', featured: true },
  { id: '6', slug: 'smart-desk-clock', name: 'Smart Desk Clock', category: 'Electronics', price: 79, image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=900', description: 'A minimal clock with a clear display and calm design.' },
  { id: '7', slug: 'everyday-overshirt', name: 'Everyday Overshirt', category: 'Clothing', price: 118, image: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=900', description: 'A relaxed layer cut from durable cotton twill.' },
  { id: '8', slug: 'classic-cotton-shirt', name: 'Classic Cotton Shirt', category: 'Clothing', price: 72, image: 'https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=900', description: 'An easy everyday shirt with a clean silhouette.' },
  { id: '9', slug: 'chef-knife-set', name: 'Chef Knife Set', category: 'Utensils', price: 96, image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=900', description: 'Sharp, balanced tools for everyday cooking.' },
  { id: '10', slug: 'stackable-mug-set', name: 'Stackable Mug Set', category: 'Utensils', price: 42, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=900', description: 'Four tactile stoneware mugs for morning rituals.' },
  { id: '11', slug: 'oak-wall-shelf', name: 'Oak Wall Shelf', category: 'Home & Furniture', price: 156, image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=900', description: 'A clean floating shelf for books and objects.' },
  { id: '12', slug: 'canvas-floor-cushion', name: 'Canvas Floor Cushion', category: 'Home & Furniture', price: 64, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=900', description: 'Soft, durable seating for relaxed spaces.' }
];

export function getProduct(slug: string) { return products.find((product) => product.slug === slug); }
