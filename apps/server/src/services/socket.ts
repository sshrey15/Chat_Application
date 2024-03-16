import { Server } from "socket.io";

class SocketService {
  private _io: Server;
  constructor() {
    console.log("SocketService Initialized");
    this._io = new Server({
      cors: {
        origin: "*",
        
      },
    });
  }

  public initListeners() {
    console.log("SocketService_initListeners initialized")
    const io = this.io;
    console.log("SocketService_initListeners initialized")
    io.on('connection', (socket) => {
      console.log('a user connected');
      console.log(`a user connected to the socket with id ${socket.id}`);
    
      socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
      });
    
    });
    
  
  }//shrey

  get io() {
    return this._io;
  }
}

export default SocketService;
