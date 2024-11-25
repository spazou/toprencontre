import React from 'react';

interface ProfileCardProps {
  name: string;
  age: number;
  city: string;
  image: string;
}

export function ProfileCard({ name, age, city, image }: ProfileCardProps) {
  return (
    <div className="space-y-2">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover rounded-lg"
          loading="lazy"
          width={300}
          height={300}
        />
        <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="text-center">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-gray-600">{age} ans, {city}</div>
      </div>
      <button className="profile-card-btn w-full">
        Discuter
      </button>
    </div>
  );
}