
// creating node server and deploy on Heroku


/*
nodemon  chalu korar jonno  
1. npm init -y
2. npm i nodemon
3. update this line ("test": "echo \"Error: no test specified\" && exit 1") 
into ( "test": "echo \"Error: no test specified\" && exit 1" , "start": "nodemon index.js") this line  from package.jason file
4. C:\Users\mdsho\nodejs\node-app> npm start



*/


const http = require("http");
const fs = require("fs");
//const port =3000;
const port =process.env.port;
const host = "127.0.0.1";

const server = http.createServer((req,res)=>{
    const readFileHandle = (statusCode,fileLocation)=>{
        fs.readFile(fileLocation,"utf-8",(err,data)=>{

            res.writeHead(statusCode,{"content-type":"text/html"});
            res.write(data);
            res.end();

        });


    }

    if(req.url==="/")
    { readFileHandle(200,"./html/index.html");

    }
    
    else if(req.url==="/contact")
    { readFileHandle(200,"./html/contact.html");

    }

    else if(req.url==="/about")
    { readFileHandle(200,"./html/about.html");

    }

    else {
        readFileHandle(404,"./html/error.html");
    }


   
    

});

server.listen(port,()=>{

    console.log(`your server is runnig at http://${host}:${port}`);
});