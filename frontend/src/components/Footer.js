export default function Footer() {
  return (
    <footer className="bg-primary text-white p-4 text-center">
      <div>© {new Date().getFullYear()} FreelanceHub. All Rights Reserved.</div>
      <div className="space-x-4">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
}
