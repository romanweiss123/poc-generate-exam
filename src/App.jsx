import React, { useState } from 'react';
import HomePage from './components/Home.jsx';
import CreateExamPage from './components/CreateExam.jsx';

export default function App() { 
    const [activePage, setActivePage] = useState('home');

    const handleOpenCreateExam = () => {
        setActivePage('createExam');
    };

    const handleBackToHome = () => {
        setActivePage('home');
    };

    if (activePage === 'createExam') {
        return <CreateExamPage onBack={handleBackToHome} />;
    }

    return <HomePage onCreateExam={handleOpenCreateExam} />;

}
