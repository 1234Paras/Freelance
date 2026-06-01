import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", role: "Client" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) return setMessage("Passwords do not match");
    try {
      await axios.post("[localhost](http://localhost:5000/api/signup)", form);
      setMessage("Signup successful! Redirecting to Login...");
    } catch {
      setMessage("User already exists");
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-primary mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" className="border p-2 w-full mb-4"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" className="border p-2 w-full mb-4"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-4"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <input type="password" placeholder="Confirm Password" className="border p-2 w-full mb-4"
          onChange={(e) => setForm({ ...form, confirm: e.target.value })} />
        <select className="border p-2 w-full mb-4" onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="Client">Client</option>
          <option value="Freelancer">Freelancer</option>
        </select>
        <button className="bg-accent text-white p-2 w-full rounded">Signup</button>
      </form>
      <p className="mt-3 text-center text-green-600">{message}</p>
    </div>
  );
}
