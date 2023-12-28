'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Specialist(props) {
  const router = useRouter();
  return (
    <Link href={`specialist/${props.item.id}`}>
      <div className="flex flex-col bg-white items-center w-48 p-4 hover:shadow-2xl rounded-xl hover:text-blue-500">
        <div className="w-16 m-2">
          <img src={props.item.image} alt="" />
        </div>
        <div>{props.item.name}</div>
      </div>
    </Link>
  );
}
