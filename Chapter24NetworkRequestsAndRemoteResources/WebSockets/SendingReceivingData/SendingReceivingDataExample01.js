let socket = new WebSocket("ws://www.example.com/server.php");

let stringData = "Hello world!";
let arrayBufferData = Uint8Array.from(['f', 'o' 'o']);
let blobData = new Blob(['f', 'o' 'o']);

socket.send(stringData);
socket.send(arrayBufferData.buffer);
socket.send(blobData);
WebSocketExample01.js
