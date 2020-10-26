import SocketIOClient from "socket.io-client/dist/socket.io.js";

const socket = SocketIOClient("http://192.168.56.1:3000/");

function sendPing() {
  socket.emit("ding");
}

function getReply() {
  console.log("Reply from server:" + data);
}

export default {};
