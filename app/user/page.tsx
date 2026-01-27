import { CardImage } from "@/components/cards/user";
import { UserResponse } from "@/lib/type/user";

export default async function UserPage() {
  const BASE_URL = process.env.NEXT_PUBLIC_API;
   const response = await fetch(`${BASE_URL}/api/v1/users?limit=54&offset=0`);
  const users: UserResponse[] = await response.json();
  return (
    <main className="container mx-auto">
      <section className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-4 m-2">
        {users.map((user, index) => (
          <CardImage
            key={index}
            avatar={user.avatar}
            id={user.id}
            name={user.name}
            role={user.role}
          />
        ))}
      </section>
    </main>
  );
}
