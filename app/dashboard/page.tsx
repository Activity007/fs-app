export default async function Page() {
  const res = await fetch("https://invalid-api.example.com/data");

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await res.json();
  return <div>{data.title}</div>;
}
