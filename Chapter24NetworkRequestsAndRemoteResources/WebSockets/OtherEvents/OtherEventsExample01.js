let socket = new WebSocket("ws://www.example.com/server.php");
socket.onopen = function() {
  alert("Connection established.");
};
socket.onerror = function() {
  alert("Connection error.");
};
socket.onclose = function() {
  alert("Connection closed.");
}; 
WebSocketExample03.js
