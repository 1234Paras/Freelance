import ServiceCard from "../components/ServiceCard";
import FreelancerCard from "../components/FreelancerCard";

export default function Home() {
  const services = [
    { title: "Web Development", desc: "Build amazing websites", img: "webdev.jpg" },
    { title: "App Development", desc: "Create mobile apps", img: "appdev.jpg" },
    { title: "Graphic Design", desc: "Design stunning visuals", img: "design.jpg" },
    { title: "Content Writing", desc: "Quality content creation", img: "writing.jpg" },
  ];

  const freelancers = [
    { name: "Alice", skill: "Web Developer", rating: "⭐️⭐️⭐️⭐️⭐️" },
    { name: "John", skill: "Designer", rating: "⭐️⭐️⭐️⭐️" },
  ];

  return (
    <div className="text-center">
      <section className="bg-secondary py-16">
        <h1 className="text-4xl font-bold text-primary">Find the Best Freelancers for Your Projects</h1>
        <p className="mt-4 text-gray-600">Hire top talent easily.</p>
      </section>
      <section className="grid md:grid-cols-4 gap-6 p-8">
        {services.map((srv) => (
          <ServiceCard key={srv.title} service={srv} />
        ))}
      </section>
      <section className="grid md:grid-cols-2 gap-6 p-8">
        {freelancers.map((f) => (
          <FreelancerCard key={f.name} freelancer={f} />
        ))}
      </section>
    </div>
  );
}
