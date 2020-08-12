const express = require("express");

//Setup Variables
const port = 3002;

const server=async()=>{
    //Create an express app
const app = express();

//Routes
app.post("/story",(req,res)=>{
res.send(`
<h1>Hey! story here</h1>
<video controls></video>
`)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  
  console.table({
"App Name":"Covid Anchor API",
path:`http://localhost:${port}`,
  });
});
};

module.exports = server;

