import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Award, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
            alt="Healthcare Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Your Health Is Our Priority</h1>
            <p className="text-xl mb-8 max-w-2xl">Experience world-class healthcare with our team of expert doctors and state-of-the-art facilities.</p>
            <Link to="/appointment" className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <UserCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
            <p className="text-gray-600">Our team consists of highly qualified and experienced medical professionals.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Care</h3>
            <p className="text-gray-600">We provide comprehensive healthcare services with a focus on patient comfort.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock medical assistance for emergencies and patient care.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;