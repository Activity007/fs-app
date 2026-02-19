import { CardImage, ProductCard } from "@/components/cards/product";
import { ProductResponse } from "@/lib/type/product";
import { UserResponse } from "@/lib/type/user";
import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_API;

// async function loadProduct(){
//     const response = await fetch(`${BASE_URL}/api/v1/products`, {
//         method:"GET"
//     })
//     const products = await response.json()
//     return products;
// }

export default async function ProductList() {
  const response = await fetch(`${BASE_URL}/api/v1/products/`);
  const products: ProductResponse[] = await response.json();
  return (
    <main className="container mx-auto">
      <section className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-4 m-2">
        {products.map((product, index) => (
          <Link key={index} href={`/product/${product.id}`}>
            <CardImage
              key={index}
              images={product.images}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
