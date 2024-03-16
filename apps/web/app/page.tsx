"use client"
import React, { useState } from 'react';

interface Message {
  id: number;
  text: string;
}

export default function Chat(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    setMessages([...messages, { id: messages.length, text: input }]);
    setInput('');
  };

  return (
    <div>
      <ul style={{
        padding: "0",
        margin: "0",
        listStyle: "none",
        height: "calc(100vh - 100px)",
        overflowY: "scroll",
        boxSizing: "border-box",
        backgroundColor: "lightgray",
      }}>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        position: "fixed",
        bottom: "0",
        backgroundColor: "white",
        padding: "10px",
        boxSizing: "border-box",
      
      }}>
      <input
        style={{
          width: "70%",
          padding: "10px",
          boxSizing: "border-box",
        
        }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Type a message"
      />
      <button style={{
        width: "30%",
        padding: "10px",
        boxSizing: "border-box",
        marginTop: "10px",
      
      }} onClick={handleSend}>Send</button>

      </div>
     
    </div>
  );
}