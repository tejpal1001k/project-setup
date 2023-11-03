const http = require('http');
const port = 8000;
const fs = require('fs');
function requestHandler(req,res){
    // console.log(req.url);
    res.setHeader('Content-Type', 'text/html');

    let filePath;
    switch(req.url){
        case '/':
            filePath = './index.html'
            break;
        case '/profile':
            filePath = './profile.html'
            break;

        default:
            filePath = './404.html'
            break;
    }
    fs.readFile(filePath, (err,data)=>{
        if(err){
            console.log("error",err);
            return res.end('<h1>Error!</h1>')
        }
       return res.end(data);
    });


}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log("Error in running the server");
        return;
    }
    console.log("Server is running fine ");
});