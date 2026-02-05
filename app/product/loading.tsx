import { SkeletonCard } from "@/components/skeletons/skeleton-card";

export default function ProductLoading() {
  return (
    <main className="container mx-auto">
      <section className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-4 m-2">
        {Array.from({ length: 15 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </section>
    </main>
  );
}

