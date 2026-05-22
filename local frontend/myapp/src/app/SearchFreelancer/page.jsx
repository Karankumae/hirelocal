'use client'
import React, { useEffect, useState } from 'react';
import { Phone, MapPin, Hammer, FolderKanban } from 'lucide-react';
import Dialogcommand from '@/components/dialogcommand';

function page() {
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    const fetchFreelancers = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/freelancers/');
        const data = await res.json();
        setFreelancers(data);
      } catch (err) {
        console.error('Failed to fetch freelancers:', err);
      }
    };

    fetchFreelancers();
  }, []);

  return (
    <>
    
    <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 ">
    <Dialogcommand/>
     
    <div className="min-h-screen  ">
      <h1 className="text-4xl font-bold text-center mb-12 ">
        Our Freelancers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {freelancers.map((freelancer) => (
          <a
            key={freelancer.id}
            href={`tel:${freelancer.phone_number}`}
            className="block bg-white border border-blue-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={freelancer.img}
                alt={freelancer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-blue-800  mb-3">
                {freelancer.name}
              </h2>
              <p className="text-[#1e3a8a] text-[15px] mb-2 flex items-center gap-2">
                <Phone size={16} className="text-[#3b82f6]" />
                <span className="font-medium">Phone:</span> {freelancer.phone_number}
              </p>
              <p className="text-[#1e3a8a] text-[15px] mb-2 flex items-center gap-2">
                <MapPin size={16} className="text-[#3b82f6]" />
                <span className="font-medium">Address:</span> {freelancer.address}
              </p>
              <p className="text-[#1e3a8a] text-[15px] mb-2 flex items-center gap-2">
                <Hammer size={16} className="text-[#3b82f6]" />
                <span className="font-medium">Experience:</span> {freelancer.work_experience} years
              </p>
              <p className="text-[#1e3a8a] text-[15px] flex items-center gap-2">
                <FolderKanban size={16} className="text-[#3b82f6]" />
                <span className="font-medium">Category:</span> {freelancer.category.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
    </div>
    </>
  )
}

export default page