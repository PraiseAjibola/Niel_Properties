import React, { useState, useRef } from 'react';
import Sidebar from "./Sidebar";
import SupportChatHeader from "./SupportChatHeader";

const SupportChat = () => {
    // State to hold the user's current typed message
    const [inputValue, setInputValue] = useState('');
    
    // State to hold the attached file
    const [attachedFile, setAttachedFile] = useState(null);
    
    // Reference to the hidden file input
    const fileInputRef = useRef(null);

    // NEW: State to track which suggestion pill is active
    const [activePill, setActivePill] = useState('');

    // NEW: State to track the active sidebar menu item (defaults to Support Chat)
    const [activeSidebarTab, setActiveSidebarTab] = useState('Support Chat');
    
    // State to hold the chat history
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'bot',
            text: 'Hello! 👋 Welcome to Niel Properties Support. Please let us know how we can assist you today.',
            time: 'Just now'
        }
    ]);

    // Action pill topics from your design
    const suggestionPills = [
        "Investment", "Property Booking", "Shortlets", "General Inquiry", "Payment/Wallet"
    ];

    // Function to handle sending a message manually
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '' && !attachedFile) return;

        let messageText = inputValue;
        if (attachedFile) {
            messageText += inputValue ? `\n[Attached File: ${attachedFile.name}]` : `[Attached File: ${attachedFile.name}]`;
        }

        const newMessage = {
            id: messages.length + 1,
            sender: 'user',
            text: messageText,
            time: 'Just now'
        };

        setMessages([...messages, newMessage]);
        setInputValue(''); 
        setAttachedFile(null); 
    };

    // UPDATED: Handle pill click to match your screenshot scenario
    const handlePillClick = (topic) => {
        setActivePill(topic);

        if (topic === "Payment/Wallet") {
            // 1. Change Sidebar active tab
            setActiveSidebarTab("Property Bookings");

            // 2. Populate the chat with the specific interaction from the screenshot
            setMessages([
                {
                    id: 1,
                    sender: 'bot',
                    text: 'Hello! 👋 Welcome to Niel Properties Support. Please let us know how we can assist you today.',
                    time: 'Just now'
                },
                {
                    id: 2,
                    sender: 'user',
                    text: "Hi, I made a payment for a shortlet apartment but it hasn't reflected yet.",
                    time: 'Just now'
                },
                {
                    id: 3,
                    sender: 'bot',
                    text: 'Agent is typing...',
                    time: 'Just now'
                }
            ]);
        } else {
            // Fallback for other pills
            setInputValue(`I have a question about ${topic}.`);
        }
    };

    // Trigger the hidden file input
    const handleAttachmentClick = () => {
        fileInputRef.current.click();
    };

    // Handle file selection
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setAttachedFile(file);
    };

    // Remove selected attachment
    const removeAttachment = () => {
        setAttachedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div className='flex h-screen bg-[#f8fafc] overflow-hidden text-sm'>
            
            {/* Pass the active tab state to the Sidebar so it can highlight 'Property Bookings' */}
            <Sidebar activeTab={activeSidebarTab} />

            <div className='flex-1 flex flex-col h-screen w-full md:ml-72'>
                
                <SupportChatHeader />
               
                <div className="p-6 md:p-8 flex-1 flex flex-col min-h-0 max-w-6xl mx-auto w-full">
                    
                    {/* --- HEADER TEXT & PILLS --- */}
                    <div className="mb-6 flex-shrink-0">
                        <h1 className="text-2xl font-bold text-gray-800">Chat with Niel Support Team</h1>
                        <p className="text-gray-500 mt-1">Our support team typically responds within a few minutes.</p>
                        
                        <div className="flex flex-wrap gap-3 mt-5">
                            {suggestionPills.map((pill, index) => (
                                <button 
                                    key={index}
                                    onClick={() => handlePillClick(pill)}
                                    className={`px-5 py-2.5 font-medium rounded-md transition shadow-sm ${
                                        activePill === pill 
                                            ? 'bg-[#1350b9] text-white border-transparent' // Active Blue state
                                            : 'bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200'
                                    }`}
                                >
                                    {pill}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* --- CHAT BOX CONTAINER --- */}
                    <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden min-h-0">
                        
                        {/* Chat History Area (Scrollable) */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex items-end ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    
                                    {/* Bot Avatar */}
                                    {msg.sender === 'bot' && (
                                        <div className="w-10 h-10 bg-[#1350b9] text-white rounded-full flex items-center justify-center flex-shrink-0 mr-4 shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                                            </svg>
                                        </div>
                                    )}

                                    {/* Chat Bubble (Updated colors to match screenshot) */}
                                    <div className={`max-w-[75%] md:max-w-[60%] px-5 py-3.5 whitespace-pre-line bg-[#f4f6f8] text-gray-600 rounded-3xl ${
                                        msg.sender === 'user' ? 'rounded-br-sm' : 'rounded-bl-sm'
                                    }`}>
                                        <p className="leading-relaxed">{msg.text}</p>
                                    </div>

                                    {/* User Avatar - "Y" inside a blue circle */}
                                    {msg.sender === 'user' && (
                                        <div className="w-10 h-10 bg-[#1350b9] text-white rounded-full flex items-center justify-center flex-shrink-0 ml-4 shadow-sm font-bold text-lg">
                                            Y
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Input Area (Pinned to bottom) */}
                        <div className="p-4 md:p-6 bg-white border-t border-gray-50 relative flex flex-col">
                            
                            {/* Attachment Preview */}
                            {attachedFile && (
                                <div className="flex items-center gap-2 mb-3 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg w-max shadow-sm border border-blue-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm font-medium truncate max-w-[200px]">{attachedFile.name}</span>
                                    <button onClick={removeAttachment} className="ml-2 hover:text-red-600 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                        </svg>
                                    </button>
                                </div>
                            )}

                            {/* Hidden File Input */}
                            <input 
                                type="file" 
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                            />

                            {/* Floating Paperclip Attachment Button */}
                            <button 
                                type="button" 
                                onClick={handleAttachmentClick}
                                className="absolute right-14 top-[-30px] text-gray-400 hover:text-blue-600 transition p-2 bg-white rounded-full shadow-sm border border-gray-100 z-10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                                </svg>
                            </button>

                            <form onSubmit={handleSendMessage} className="relative flex items-center w-full gap-3">
                                
                                <input 
                                    type="text" 
                                    placeholder="Type a message..." 
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className="w-full bg-[#f4f4f5] text-gray-800 placeholder-gray-400 rounded-full pl-6 pr-6 py-4 outline-none focus:ring-2 focus:ring-blue-100 transition"
                                />

                                <button 
                                    type="submit" 
                                    disabled={!inputValue.trim() && !attachedFile}
                                    className={`w-12 h-12 flex items-center justify-center rounded-full transition flex-shrink-0 ${
                                        inputValue.trim() || attachedFile ? 'bg-[#1350b9] text-white hover:bg-blue-800 shadow-md' : 'bg-blue-300 text-white cursor-not-allowed'
                                    }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
                                      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                                    </svg>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}       

export default SupportChat;