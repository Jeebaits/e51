const express = require("express");
const app = express();

//--serve static files from public
app.use(express.static("public"));

//--configure express to pass data from a form
app.use(express.urlencoded({extended : true}));

//---home
app.get("/", (req, res) => {
    // console.log(__dirname);
    // res.send('Home page');
    res.sendFile(__dirname + "/public/pages/index.html");
});

//---about
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/pages/about.html");
});

//---addPost
app.get("/addPost", (req, res) => {
    res.sendFile(__dirname + "/public/pages/addPost.html");
});

//---submitting a post
app.post("/addPost", (req, res) => {
    // console.log(req.body);
    res.send(req.body);
});

app.listen(3000, () => {
    console.log("Server running at port 3000.")
});