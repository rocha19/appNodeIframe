var express = require("express");
app = express()

app.set("view engine", "ejs");

app.get("/", (request, response) => {
    response.render("index");
});

app.get("/chat", (request, response) => {
    response.render("chat");
});

app.listen(3306, () => {
    console.log("Servidor on!");
})