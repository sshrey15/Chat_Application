"use client";
import React, { useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";

interface SocketProviderProps {
  children?: React.ReactNode;
}

interface ISocketContext {
  sendMessage: (message: string) => any;
}

const SocketContext = React.createContext<ISocketContext | null>(null);

const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const _socket = io('http://localhost:8000');
    setSocket(socket);

    return () => {
      _socket.disconnect();
    }
  }, []);

  const sendMessage: ISocketContext["sendMessage"] = useCallback(
    (msg: string) => {
      if (socket) {
        console.log("sending message", msg);
      }else{
        console.log("socket not connected");
      
      }
    },
    [socket]
  );

  return (
    <SocketContext.Provider 
      value={{
        sendMessage
      }}
     >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;