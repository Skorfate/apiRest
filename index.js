const express = require("express");
const app = express();
const character = require("./api/characterData"); 
const image = require("./api/characterImage"); 

app.use("/character",character);
app.use("/image",image);

app.use((req,res,next)=> {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});
 
//all other requests are not implemented.
app.use((err,req, res, next) => {
   res.status(err.status || 501);
   res.json({
       error: {
           code: err.status || 501,
           message: err.message
       }
   });
});

app.listen(9990, () => {
 console.log("El servidor está inicializado en el puerto 9990");
});