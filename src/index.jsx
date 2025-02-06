import React from 'react';
import { createRoot } from 'react-dom/client';
import WebstudioApp from '../.webstudio/app';
import { Chatbot } from './components/Chatbot';

function App() {
    return (
        <>
            <WebstudioApp />
            <Chatbot />
        </>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />); 