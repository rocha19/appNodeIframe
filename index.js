var express = require("express");
app = express()


app.set("view engine", "ejs");
app.use(express.static('public'));


app.get("/", (request, response) => {
    response.render("index");
});

app.get("/page2", (request, response) => {
    response.render("page2");
});

app.listen(3306, () => {
    console.log("Servidor online em http://localhost:5000");
})