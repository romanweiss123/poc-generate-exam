import React from 'react';
import { Home, PlusCircle, CheckSquare } from 'lucide-react';

// Wir nehmen hier die Prop "onCreateExam" entgegen.
// Das ist die Funktion, die App uns übergibt.
export default function HomePage({ onCreateExam }) {
  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800">Hallo Welt!</h1>
        <p className="text-gray-600 mt-4">Das ist meine erste React-Komponente.</p>

        <div className="mt-6 flex gap-4">
          <Home />
          <PlusCircle />
          <CheckSquare />
        </div>

        {/* Button, um zur CreateExam-"Unterseite" zu wechseln */}
        <button
          type="button"
          onClick={onCreateExam} // ruft die Funktion aus App.jsx auf
          className="mt-8 px-4 py-2 rounded bg-blue-600 text-white font-semibold"
        >
          Create exam
        </button>
      </div>
    </div>
  );
}
