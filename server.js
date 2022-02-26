const http=require("http")
const fs=require("fs")

const server= http.createServer((req,res)=>{
    // console.log("req made")
    // console.log(req.method)
    // console.log(req.url)
    let htmlpath='./views'
    switch(req.url){
        case '/':
            htmlpath+='/index.html'
            res.statusCode=200
            break;
        case '/about':
            htmlpath+='/about.html'
            res.statusCode=200
            break;
        default:
            htmlpath+='/404.html'
            res.statusCode=404
            break;
    }

    res.setHeader('Content-Type','text/html')
    // res.write("<h1>hello ji</h1>")
    fs.readFile(htmlpath,(err,filedata)=>{
        if(err) {console.log(err)}
        else {
            res.write(filedata)
            res.end()
        }
    });
})
// eye bna li ab sunne ke liye kaan bnao with listen
server.listen(3000,'localhost',()=>{
    console.log("listening bro...")
})