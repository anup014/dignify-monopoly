import { io } from "socket.io-client";
const socket = io("http://localhost:5000"); // Ensure backend is running on port 5000
export default socket;
