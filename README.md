# ScrapeAPI - Google and YouTube Results Scraper API

ScrapeAPI is a powerful and easy-to-use API for scraping Google search results of a pdf link based on the user given book name and YouTube search results based on a user-defined query.

SerpAPI and a node package youtubei is used for web scraping. SerpAPI is used for google scraping and youtubei is used for YouTube scraping.

[![SerpAPI](https://img.shields.io/badge/SerpAPI-141414?style=for-the-badge&logo=data:image/png;base64,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 "Serp API")
](https://serpapi.com/)[![Git](https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=ffffff "Git")](https://git-scm.com/)
### Making a Request

All API requests are made via HTTP GET. The base URL for all requests is `https://scrapeapi.vercel.app`.

## Endpoints

### Google Search Results

Retrieve Google search results for a given textbook name.

**Endpoint:**

```
GET /google/search?q=YOUR_TEXTBOOK 
```
**Query Parameters:** 
- `q` (string, required): The textbook you want to search on Google.

**Example Request:**

```http
GET /google?q=Samanta D., Classic Data Structures, Prentice Hall India, 2/e, 2009.
```

### YouTube Search Results

Retrieve YouTube search results for a given query.

**Endpoint:**

```
GET /youtube?q=YOUR_QUERY
```
**Query Parameters:**
- `q` (string, required): The query you want to search on YouTube.  

**Example Request:**

```http
GET /youtube?q=Applications of linked list
```

## Response Format

The response for Google search results will be in JSON format. Here is an example response:

```json
{
  "link": "Textbook pdf link"
}
```

The response for YouTube search results will be in JSON format. Here is an example response:

```json
{
  [
    {
      "id": "Result video link",
      "title": "Result video title",
      "thumbnails": {
        "url": "Result video thumbnail",
	"width": "Result video thumbnail width",
	"height": "Result video thumbnail height"
      }
    },
    {
      "id": "Result video link",
      "title": "Result video title",
      "thumbnails": {
        "url": "Result video thumbnail",
        "width": "Result video thumbnail width",
        "height": "Result video thumbnail height"
      }
    }
  ]
}
```

## Errors

If there are any errors with your request, you will receive a JSON response with an error message and status code. Please refer online for a list of possible error codes and their meanings.

## Sample Code

```javascript
import axios from "axios";
# Example request to scrape Google search results
query = "Textbook name"
url = "https://scrapeapi.vercel.app/google"

#Example request to scrape YouTube search results
query = "Topic name"
url = "https://scrapeapi.vercel.app/youtube"

const response = await axios.get(url, {
    params: {
      q: query
    },
});

if response.status == 200:
    data = response.json()
    # Process the data as needed
else:
    print("Request failed with status code:", response.status)
```

## Support and Contact

If you have any questions, encounter issues, or need assistance, please raise an issue at https://github.com/nuzaim/searchserver/issues 

Happy scraping with ScrapeAPI!
