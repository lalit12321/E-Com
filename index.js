const express = require("express");
require("./db/config");
const User = require("./db/users");
const app = express();
const core = require('cors');
const port = process.env.PORT || 7000;
app.use(express.json());
app.use(core());

app.post("/ragister", (req,resp)=>{
    console.log(req.body);
    const data = new User(req.body);
    data.save();
    resp.send(data);
})

app.listen(port, () => {
    console.log('connection is setup at ${port}')
});