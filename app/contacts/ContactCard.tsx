// app/components/ContactCard.tsx
import React from 'react';

interface ContactCardProps {
  title: string;
  children: React.ReactNode;
  bgColor: string;
//   icon: React.ReactNode;
}

export default function ContactCard({ title, children, bgColor}: ContactCardProps) {
  return (
    <div className={`rounded-lg shadow-lg p-8 text-white ${bgColor}`}>
      <div className="text-center">
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        {children}
      </div>
    </div>
  );
}