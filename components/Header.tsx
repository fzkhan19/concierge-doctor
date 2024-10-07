import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500">
          Doctor+
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link></li>
          <li><Link href="/about" className="text-gray-600 hover:text-blue-500">About</Link></li>
          <li><Link href="/services" className="text-gray-600 hover:text-blue-500">Services</Link></li>
          <li><Link href="/blog" className="text-gray-600 hover:text-blue-500">Blog</Link></li>
          <li><Link href="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link></li>
        </ul>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild className="bg-blue-500 hover:bg-blue-600">
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;