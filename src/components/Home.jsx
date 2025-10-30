import React, { useState} from 'react';
import { Home, PlusCircle, CheckSquare} from 'lucide-react';

function HomePage() {
  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800">Hallo Welt!</h1>
        <p className="text-gray-600 mt-4">Das ist meine erste React-Komponente.</p>
      </div>
    </div>
  );
}

export default function App() {
    return <HomePage />;
}