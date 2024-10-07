import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'The Benefits of Concierge Medicine',
    excerpt: 'Discover how personalized care can lead to better health outcomes and improved quality of life.',
    date: 'June 15, 2023',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    title: 'Preventative Care: Your Key to Longevity',
    excerpt: 'Learn about the importance of regular check-ups and screenings in maintaining long-term health.',
    date: 'May 28, 2023',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1791&q=80',
  },
  {
    title: 'Telemedicine: The Future of Healthcare',
    excerpt: 'Explore how virtual consultations are revolutionizing the way we receive medical care.',
    date: 'May 10, 2023',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Nutrition Tips for Optimal Health',
    excerpt: 'Get expert advice on maintaining a balanced diet to support your overall well-being.',
    date: 'April 22, 2023',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1753&q=80',
  },
  {
    title: 'Managing Stress in the Modern World',
    excerpt: 'Discover effective strategies for coping with stress and improving your mental health.',
    date: 'April 5, 2023',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80',
  },
  {
    title: 'The Importance of Sleep for Your Health',
    excerpt: 'Learn about the crucial role of quality sleep in maintaining physical and mental well-being.',
    date: 'March 18, 2023',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Health & Wellness Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="flex flex-col">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="object-cover h-48 w-full"
            />
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild>
                <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}