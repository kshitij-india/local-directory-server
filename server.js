var http= require('http');
var fs= require('fs');
var path= require('path');

var server= http.createServer(function(req, res){
    var filePath= `./served-directory${req.url}`;
    if(filePath== './served-directory/')
        filePath= './served-directory/index.html';

    const extMap = {
        '.ico': 'image/x-icon',
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.wav': 'audio/wav',
        '.mp3': 'audio/mpeg',
        '.svg': 'image/svg+xml',
        '.pdf': 'application/pdf',
        '.doc': 'application/msword'
        };

    var extName = path.extname(filePath);
    
    fs.readFile(filePath, function(error, data){
        if(error){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("No file exists with the given path");
        }
        else{
            res.writeHead(200, { 'Content-Type': extMap[extName] || 'text/plain' });
            res.end(data);
        }
    });
});

exports.listen= function(port, callback){
    server.listen(port, function(){
        console.log(`Directory 'served-directory' hosted on port ${port}. Naivgate to http://localhost:${port}/fileName to proceed`);

        if(callback) callback();
    });
};

exports.close= function(){
    server.close(function(){
        console.log("Server closed");
    });
};