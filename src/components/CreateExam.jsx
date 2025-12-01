import React from 'react';

// onBack bekommen wir von App.jsx, um wieder zur Startseite zu wechseln
export default function CreateExamPage({ onBack }) {
  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800">Create exam</h1>

        {/* Diese Seite ist absichtlich noch "leer" – hier kannst du später deine Logik einbauen */}
        <p className="text-gray-600 mt-4">
          Diese Unterseite ist im Moment noch leer. Später kannst du hier das Formular zur Prüfungserstellung einbauen.
        </p>

        <button
          type="button"
          onClick={onBack}
          className="mt-8 px-4 py-2 rounded bg-gray-200 text-gray-800 font-semibold"
        >
          Back to start page
        </button>
      </div>
    </div>
  );
}
