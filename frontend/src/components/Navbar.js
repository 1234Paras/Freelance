import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">FreelanceHub</h1>
      <ul className="flex space-x-6">
        {["Home", "About", "Services", "Login", "Signup", "Contact"].map((item) => (
          <li key={item}>
            <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-accent">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
