import { useState } from "react";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const [search, setSearch] = useState("");
  const services = [
    { title: "Web Development", desc: "Website solutions", img: "webdev.jpg", cat: "Tech" },
    { title: "Graphic Design", desc: "Logos, banners", img: "design.jpg", cat: "Design" },
  ];

  const filtered = services.filter((s) => s.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-8">
      <input
        type="text"
        placeholder="Search services..."
        className="border p-2 w-full mb-6"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map((srv) => (
          <ServiceCard key={srv.title} service={srv} />
        ))}
      </div>
    </div>
  );
}
