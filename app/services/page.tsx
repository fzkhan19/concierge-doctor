import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      title: 'Home Visits',
      description: 'Receive comprehensive medical care in the comfort of your own home. Our doctors come to you, equipped with the latest portable medical technology.',
      image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: 'Virtual Consultations',
      description: 'Connect with our experienced doctors from anywhere, anytime. Get expert medical advice, prescriptions, and follow-ups through secure video calls.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: 'Preventative Care Plans',
      description: 'Stay ahead of health issues with our personalized preventative care plans. Regular check-ups, screenings, and lifestyle advice tailored to your needs.',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1791&q=80',
    },
    {
      title: 'Emergency Care',
      description: "24/7 access to urgent medical care. Whether it's a sudden illness or injury, we're always just a call away.",
      image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: 'Wellness Programs',
      description: 'Comprehensive wellness programs including nutrition advice, fitness plans, and stress management techniques for overall health improvement.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: 'Specialist Coordination',
      description: 'Seamless coordination with specialists when needed. We manage referrals, appointments, and ensure continuity of care.',
      image: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={250}
              className="object-cover h-48 w-full"
            />
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Membership Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Basic', price: '$200/month', features: ['24/7 access to doctor', 'Virtual consultations', 'Annual health assessment'] },
            { name: 'Premium', price: '$400/month', features: ['All Basic features', 'Unlimited home visits', 'Quarterly health reviews', 'Priority specialist referrals'] },
            { name: 'Family', price: '$800/month', features: ['Coverage for up to 4 family members', 'All Premium features', 'Pediatric care', 'Family health planning'] },
          ].map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="text-2xl font-bold">{plan.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full">Sign Up Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}