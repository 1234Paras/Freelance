export default function Contact() {
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
      <form action="[localhost](http://localhost/php/contact.php)" method="POST">
        <input type="text" name="name" placeholder="Name" className="border p-2 w-full mb-4" required />
        <input type="email" name="email" placeholder="Email" className="border p-2 w-full mb-4" required />
        <input type="text" name="subject" placeholder="Subject" className="border p-2 w-full mb-4" required />
        <textarea name="message" placeholder="Message" className="border p-2 w-full mb-4" required />
        <button type="submit" className="bg-accent text-white p-2 w-full rounded">Send Message</button>
      </form>
    </div>
  );
}
