import { ProductResponse } from "@/lib/type/product";

// function to get product by p_id
async function getProductById(id: string) {
   const data = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/products/${id}`);
   const product = await data.json();
   return product;

}
export default async function ProductDetailPage({params}:{params: Promise<{id: string}>}) {
    const {id} = await params
 
    //receive product data by id
   const product: ProductResponse =await getProductById(id) 
   console.log(product);      

    return (
      <main>
        <section>
          <h1>Product Detail Page {id}</h1>
          <h2>{product.title}</h2>
        </section>
      </main>
    );
}