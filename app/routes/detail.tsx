import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getProductById } from '~/apis/products';

export default function DetailPage() {
  const { data, isLoading } = useQuery(getProductById(1));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-700 mb-4">{data.description}</p>
      <p className="text-lg font-semibold mb-4">Price: ${data.price}</p>
      <img src={data.images[0]} alt={data.title} className="w-full max-w-md mx-auto" />
    </div>
  );
}
