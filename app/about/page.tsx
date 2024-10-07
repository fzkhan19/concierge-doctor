import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

      {/* Doctor's Bio */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            alt="Dr. Jane Smith"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Dr. Jane Smith, MD</h2>
            <p className="text-lg mb-4">
              Dr. Jane Smith is a board-certified internist with over 15 years of experience in primary care. She founded Concierge MD with the mission to provide personalized, high-quality healthcare that puts patients first.
            </p>
            <p className="text-lg">
              "My goal is to build lasting relationships with my patients, understand their unique health needs, and provide comprehensive care that goes beyond treating symptoms. I believe in empowering patients with knowledge and partnering with them for better health outcomes."
            </p>
          </div>
        </div>
      </section>

      {/* Practice History and Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
        <div className="space-y-8">
          {[
            { year: 2010, event: 'Dr. Smith starts her private practice' },
            { year: 2015, event: 'Transition to concierge model to provide more personalized care' },
            { year: 2018, event: 'Introduced telemedicine services for greater accessibility' },
            { year: 2020, event: 'Expanded team and services to meet growing demand' },
            { year: 2023, event: 'Launched preventative care program focusing on long-term health' },
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="w-24 text-right mr-4">
                <span className="font-bold text-blue-600">{item.year}</span>
              </div>
              <div className="flex-1 bg-gray-100 p-4 rounded-lg">
                <p>{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Dr. Jane Smith', role: 'Founder & Primary Care Physician' },
            { name: 'Dr. Michael Lee', role: 'Internal Medicine Specialist' },
            { name: 'Sarah Johnson', role: 'Nurse Practitioner' },
            { name: 'David Brown', role: 'Nutritionist' },
            { name: 'Emily Chen', role: 'Patient Care Coordinator' },
            { name: 'Robert Taylor', role: 'Telemedicine Technician' },
          ].map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}