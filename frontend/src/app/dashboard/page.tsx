'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600">
          You are logged in 🎉
        </p>

        <button
          onClick={() => {
            localStorage.removeItem('token');
            router.push('/login');
          }}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </main>
  );
}

