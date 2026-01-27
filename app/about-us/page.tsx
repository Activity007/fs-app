import { Card } from "@/components/cards/card";

export default function AboutUsPage() {
    return (
      <section>
        <h1>Amazing science</h1>
        <Card
          source={"	https://flowbite.com/docs/images/blog/image-1.jpg"}
          title={">Streamlining your design process today."}
          desc={
            "In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations."
          }
        />
      </section>
    );
}