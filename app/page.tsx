import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 flex items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            Dr. Matthew Anderson
            <br />
            <span className="text-blue-500">A dedicated doctor you can trust</span>
          </h1>
          <p className="text-xl mb-8 text-gray-600">Providing personalized healthcare with a focus on your well-being</p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">Book an appointment</Button>
        </div>
        <div className="relative w-96 h-96">
          <Image
            src="/images/doctor-illustration.png"
            alt="Doctor Illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-10 grid grid-cols-3 gap-8">
        {[
          { title: '24/7 service', description: 'Always available for your health needs' },
          { title: '15 years of experience', description: 'Trusted healthcare professional' },
          { title: 'High-quality care', description: 'Personalized treatment plans' },
        ].map((feature, index) => (
          <Card key={index} className="text-center border-none shadow-none">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-2xl">+</span>
              </div>
              <CardTitle className="text-blue-500">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* About Section */}
      <section className="py-20 flex items-center justify-between">
        <div className="w-1/2">
          <Image
            src="/images/doctor-photo.jpg"
            alt="Dr. Matthew Anderson"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2 max-w-xl">
          <h2 className="text-3xl font-bold mb-4">A dedicated doctor with the core mission to help</h2>
          <p className="text-gray-600 mb-6">
            Dr. Matthew Anderson is committed to providing exceptional healthcare services
            with a personalized approach. With years of experience and a passion for patient care,
            he ensures that each individual receives the attention and treatment they deserve.
          </p>
          <Button variant="outline" className="text-blue-500 border-blue-500">
            Book an Appointment <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Services
          <br />
          <span className="text-blue-500">Experienced in multiple medical practices</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our comprehensive range of medical services caters to various health needs,
          ensuring you receive the best care possible.
        </p>
        <div className="grid grid-cols-3 gap-8">
          {[
            { title: 'General', icon: '🩺' },
            { title: 'Pediatrics', icon: '👶' },
            { title: 'Nutritional', icon: '🥗' },
            { title: 'Cardiology', icon: '❤️' },
            { title: 'Ophthalmology', icon: '👁️' },
            { title: 'Orthopedics', icon: '🦴' },
          ].map((service, index) => (
            <Card key={index} className="text-center border border-gray-200">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full text-blue-500 border-blue-500">
                  Book an Appointment
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-500 text-white py-12 px-8 rounded-lg mb-20">
        <h2 className="text-3xl font-bold mb-4 text-center">Schedule a virtual or presential appointment today</h2>
        <div className="flex justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-blue-500 hover:bg-gray-100">
            Book an appointment
          </Button>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 flex items-center justify-between">
        <div className="w-1/2 max-w-xl">
          <h2 className="text-3xl font-bold mb-4">A dedicated doctor with the core mission to help</h2>
          <p className="text-gray-600 mb-6">
            Watch this short video to learn more about our approach to patient care and
            how we strive to make a difference in our community's health.
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" className="flex items-center text-blue-500 border-blue-500">
              <span className="mr-2">📅</span> Book an appointment
            </Button>
            <Button variant="outline" className="flex items-center text-blue-500 border-blue-500">
              <span className="mr-2">📞</span> Call for emergencies
            </Button>
            <Button variant="outline" className="flex items-center text-blue-500 border-blue-500">
              <span className="mr-2">🕒</span> See working hours
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="aspect-w-16 aspect-h-9 relative">
            <Image
              src="/images/doctor-video-thumbnail.jpg"
              alt="Doctor Video"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          What our great customers say about Dr. Matthew Anderson
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((_, index) => (
            <Card key={index} className="border border-gray-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
                <div className="flex items-center">
                  <Image
                    src={`/images/avatar-${index + 1}.jpg`}
                    alt={`Patient ${index + 1}`}
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-gray-500 text-sm">Patient</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}