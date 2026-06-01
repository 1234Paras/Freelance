export default function About() {
  const sections = [
    { title: "Who We Are", text: "We connect clients with top freelancers globally." },
    { title: "Our Mission", text: "Empower people to work and hire remotely with trust." },
    { title: "Why Choose Us", text: "Secure payments, verified talent, smooth communication." },
  ];

  return (
    <div className="p-8 grid md:grid-cols-3 gap-8">
      {sections.map((sec) => (
        <div key={sec.title} className="p-6 shadow-lg rounded-lg bg-secondary">
          <h2 className="text-xl font-bold text-primary">{sec.title}</h2>
          <p className="mt-4">{sec.text}</p>
        </div>
      ))}
    </div>
  );
}
