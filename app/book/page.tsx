"use client"

import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon, Clock } from 'lucide-react';

export default function BookConsultation() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: '',
    reason: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    toast({
      title: "Consultation Request Sent",
      description: "We've received your request and will contact you shortly to confirm your appointment.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      consultationType: '',
      reason: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Book a Consultation</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Full Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2">Phone Number</label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="preferredDate" className="block mb-2">Preferred Date</label>
              <div className="flex">
                <Input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="flex-grow"
                />
                <CalendarIcon className="ml-2 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label htmlFor="preferredTime" className="block mb-2">Preferred Time</label>
              <div className="flex">
                <Input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  className="flex-grow"
                />
                <Clock className="ml-2 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label htmlFor="consultationType" className="block mb-2">Consultation Type</label>
              <Select
                onValueChange={(value) => handleSelectChange('consultationType', value)}
                value={formData.consultationType}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select consultation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inPerson">In-Person Visit</SelectItem>
                  <SelectItem value="virtual">Virtual Consultation</SelectItem>
                  <SelectItem value="homeVisit">Home Visit</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="reason" className="block mb-2">Reason for Consultation</label>
              <Textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">Request Consultation</Button>
          </form>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Consultation Information</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <p className="mb-2">Our consultations typically last 30-60 minutes, depending on the complexity of your health concerns.</p>
                <p>During your consultation, you'll have the opportunity to discuss your health history, current concerns, and wellness goals with our experienced physician.</p>
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What to Expect</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Comprehensive health assessment</li>
                <li>Personalized treatment plans</li>
                <li>Ample time to ask questions</li>
                <li>Follow-up recommendations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preparing for Your Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">To make the most of your consultation, please:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Bring a list of current medications and supplements</li>
                <li>Have your medical history ready</li>
                <li>Prepare any questions you'd like to ask</li>
                <li>For virtual consultations, ensure you have a stable internet connection</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}