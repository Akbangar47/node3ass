/*
Middleware
1.Middlewear are like any general functions which takes in three parameters as request, reponse, and next function.
2.These middlewear are used to execute some function before the response is send back to the client.
3.It mostly gets used for the authentication, that before we send the response,we can authenticate if the API request is called from the client  with proper user credential.
4.Thus middlewear can be applied on the whole application level as well as the particular API. 
5.next() function is very important , after  the end of each of each middle wear we should  execute next function.  
*/

const express=require("express")

const app=express();

const port=6000;

const middleware1 =(req, res, next)=>{
    console.log("Middleware 1");
    next()
}
app.get("/",middleware1,(req,res)=>{
    res.send("<h1>Main page with middleware1<h1>")
})
const middleware2 =(req, res, next)=>{
    console.log("Middleware 2");
    next()
}
app.use(middleware2);

app.get("/page1",middleware1,(req,res)=>{
    res.send("<h1>Page 1 with middleware1 and middleware2<h1>")
})
app.get("/page2",(req,res)=>{
    res.send("<h1>Page 2 middleware2<h1>")
})
app.get("/page3",(req,res)=>{
    res.send("<h1>Page 3 middleware2<h1>")
})
app.get("/page4",(req,res)=>{
    res.send("<h1>Page 4 middleware2<h1>")
})
app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})


