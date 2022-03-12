var express = require("express");
app = express()


app.set("view engine", "ejs");
app.use(express.static('public'));


app.get("/", (request, response) => {
    response.render("index");
});

app.get("/farmacovigilancia-imunik", (request, response) => {
    response.render("chat");
});

app.listen(3306, () => {
    console.log("Servidor online em http://localhost:3306");
})