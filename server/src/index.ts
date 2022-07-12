import http from 'http'

http.createServer((req, res) => {
    // res.writeHead(200);
    res.write('this is me shyma!!')
    res.end()
}).listen(3000)