import { Form } from "@/components/ui/form";
// expected error handling

export default async function Page() {
  const res = await fetch("https://api.escuelajs.co/api/v1/product");

  if (!res.ok) {
    return <p>There was an error.</p>;
  }

  const data = await res.json();

  return (
    <div>
      .......
    </div>
  );
}
//===========================================

















