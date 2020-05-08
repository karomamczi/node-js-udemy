const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Assignment #1</title></head>');
    res.write('<body>');
    res.write('<h1>Hello stranger!</h1>');
    res.write('<h2>Add new user</h2>');
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Add</button></form>'
    );
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Assignment #1 | Users</title></head>');
    res.write('<body>');
    res.write('<h1>Users</h1>');
    res.write('<ul><li>User #1</li><li>User #2</li><li>User #3</li></ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log(username);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
};

module.exports = requestHandler;
