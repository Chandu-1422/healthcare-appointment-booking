import React from 'react';
import { Heart, Brain, Stethoscope, Baby, Bone, Eye } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care including diagnostics, treatment, and prevention.',
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert care for neurological conditions and disorders.',
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Primary healthcare services for all age groups.',
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized medical care for infants, children, and adolescents.',
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Treatment for bone, joint, and muscle conditions.',
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services and treatments.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <service.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;