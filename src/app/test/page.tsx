// src/app/test/page.tsx
import React from 'react';

export default function AngledSplitDiv() {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-red-500 relative">        
        <p className="text-white p-4 z-10 relative">Left Side Content</p>
      </div>
      <div className="w-2/3 bg-indigo-700">
        <p className="text-white p-4">Right Side Content</p>
      </div>
    </div>
  );
}
