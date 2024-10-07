import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Doctor+</h3>
            <p>Personalized Healthcare, Anytime You Need It</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/services" className="hover:underline">Our Services</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Book Now</h3>
            <ul className="space-y-2">
              <li><Link href="/book" className="hover:underline">Book Appointment</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>123 Medical Plaza, Suite 100</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@doctorplus.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-400 text-center">
          <p>&copy; 2023 Doctor+. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;