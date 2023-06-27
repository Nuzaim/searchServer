const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const googleRouter = require("./routes/googleRouter");
const youtubeRouter = require("./routes/youtubeRouter");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.use("/google",googleRouter);
app.use("/youtube",youtubeRouter);

app.use((req,res,next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

const server = http.createServer(app);

server.listen(2000,"localhost",() => {
    console.log("Server running at http://localhost:2000");
});