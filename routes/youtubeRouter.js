const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("youtubei");

const youtube = new Client(); 

const youtubeRouter = express.Router();

youtubeRouter.use(bodyParser.json());

youtubeRouter.route("/")
.get(async (req,res) => {
    var query = req.query.q;
    console.log(query);
    req.statusCode = 200;
    res.setHeader("Content-Type","application/json");
    res.setHeader('Access-Control-Allow-Origin', '*');
    const videos = await youtube.search(query, {
      type: "video", // video | playlist | channel | all
    });
    var response = [];
    videos.items.forEach(item => {
      const {id, title, thumbnails,viewCount} = item;
      response.push({id,title,thumbnails: thumbnails[0],views: viewCount})
    });
    //response.sort((a, b) => b.views - a.views); //Sort based on views count
    res.json(response);
})

module.exports = youtubeRouter;
