'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Chatbot from '@/components/Chatbot';

export default function ChatPage() {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for authentication token
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
      router.push('/login');
      return;
    }

    setToken(storedToken);
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen soft-gradient flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-600 rounded-full animate-spin mx-auto" style={{ animationDelay: '0.1s' }}></div>
          </div>
          <p className="mt-6 text-lg text-gray-600 font-medium">Loading chat...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen soft-gradient">
      <div className="container mx-auto px-4 py-8">
        <div className="h-[calc(100vh-8rem)]">
          <Chatbot token={token ?? undefined} />
        </div>
      </div>
    </div>
  );
}
