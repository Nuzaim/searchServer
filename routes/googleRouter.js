const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const googleRouter = express.Router();

googleRouter.use(bodyParser.json());

googleRouter.route("/")
.get(async (req,res) => {
    var query = "some";
    var query = req.query.q;
    req.statusCode = 200;
    res.setHeader("Content-Type","application/json");
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(query);
    await axios
    .get(
      `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(
        query + " textbook filetype:pdf"
      )}&google_domain=google.com&hl=en&api_key=d68649707c3bad6349351b40011370ff9f352057dce7861280c5d970e7617db4`
    )
    .then((response) => {
      const jsonData = response.data;
      res.json( {link : jsonData.organic_results[0].link});
    })
    .catch((error) => {
      res.json(error);
    });
})

module.exports = googleRouter;