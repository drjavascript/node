// ����� �����մϴ�.
var net = require('net');

// TCP ������ �����մϴ�.
net.createServer(function (socket) {
  // ���� ����� �ۼ��մϴ�.
  socket.write('HTTP/1.1 200 OK\n');
  socket.write('Server: RintIanTta Node.js Custom Server\n');
  socket.write('Content-Type: text/html');
  // �����մϴ�.
  socket.end();
}).listen(52273, function () {
  console.log('TCP Server Running at 127.0.0.1:52273');
});