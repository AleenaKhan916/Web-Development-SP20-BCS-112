//making file based module and importing it to another js file
/*const a={
    average: (a,b) => {
        console.log((a+b)/2);
    },

    percent: (a,b) => {
        console.log((a/b)*100);
    },


};

module.exports=a;
modules are file based,build in like http,file ,third party

*/

//making server
const http=require("http");
const fs=require("fs");
const PORT = 2000;
const hostname="localhost";
const home=fs.readFileSync("./index.html");
const server =http.createServer((req,res)=>{
    if (req.url=="/")
    {
        return res.end(home);
    }
    if (req.url=="/about")
    {
        res.end("<h1>ABOUT PAGE</h1>")
    }

    if (req.url=="/contact")
    {
        res.end("<h1>Contact Page</h1>")
    }

    if (req.url=="/service")
    {
        res.end("<h1>SERVICE PAGE</h1>")
    }
    //res.end("<h1>Hello</h1>");
    else
    {
        res.end("<h1>Page not found</h1>")
    }



});
//to make server listen
server.listen(PORT,hostname,()=> {
    console.log("Server is working on http://localhost:2000)");
}
);


