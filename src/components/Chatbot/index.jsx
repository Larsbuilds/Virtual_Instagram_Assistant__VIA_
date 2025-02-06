import React, { useState, useEffect } from 'react';

export function Chatbot() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);

    // Find the Webstudio button
    useEffect(() => {
        const chatButton = document.querySelector('.w-link.cx7e777.cn12ej2');
        if (chatButton) {
            chatButton.addEventListener('click', (e) => {
                e.preventDefault();
                setIsChatOpen(!isChatOpen);
            });
        }
    }, [isChatOpen]);

    async function sendMessage(message) {
        try {
            const response = await fetch('/.netlify/functions/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message })
            });
            const data = await response.json();
            setMessages(prev => [...prev, 
                { type: 'user', text: message },
                { type: 'bot', text: data.response }
            ]);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            {isChatOpen && (
                <div id="chatInterface" className="w-box" style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: '20px',
                    width: '350px',
                    zIndex: 1000
                }}>
                    <div className="w-box c1cvcmzo cdwd3jx copqmak">
                        <div className="w-box cry9bxc c1lfjoq7">
                            <span className="w-text cy1haag">Chat with Lars's AI</span>
                            <button 
                                className="w-button close-button catu86a csru8nn"
                                onClick={() => setIsChatOpen(false)}
                            >
                                ×
                            </button>
                        </div>
                        
                        <div className="chat-messages w-box cry9bxc" style={{
                            height: '400px',
                            overflowY: 'auto'
                        }}>
                            {messages.map((msg, index) => (
                                <div key={index} className={`w-box cry9bxc c1lfjoq7 ${
                                    msg.type === 'user' ? 'c1ngdwug' : 'c10yh23j'
                                }`}>
                                    <span className="w-text cy1haag">{msg.text}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="w-box cry9bxc c1lfjoq7">
                            <input 
                                type="text" 
                                className="w-input chat-input catu86a csru8nn c1e9wxra"
                                placeholder="Type your message..."
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter' && e.target.value.trim()) {
                                        sendMessage(e.target.value.trim());
                                        e.target.value = '';
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
} 