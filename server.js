const express = require("express")
const port = 8000;
const app = express();

app.listen(port,() =>{
    console.log(`===Server listening on port ${port}`); 
})