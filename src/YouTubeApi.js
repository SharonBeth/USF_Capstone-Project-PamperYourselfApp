import axios from "axios";


//API Class for YouTube Video get/post/patch/delete.

//CapstoneCleanUp = Where is Figure out how to fix: process.env.REACT_APP_BASE_URL part of this code.

const BASE_URL_YOUTUBE = process.env.REACT_APP_BASE_URL || "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest";

class YouTubeApi{
    static token;

    static async request(endpoint, data= {}, method="get"){
        console.debug("YouTubeApi Call:", endpoint, data, method);

        const url_YouTube = `${BASE_URL_YOUTUBE}/${endpoint}`;
    }

    static async loadClient() {
        console.log("load Client")
        gapi.client.setApiKey("AIzaSyDmgcCr-ZWbpLoSrzsEMTOD9Mup6ToyR88");
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function() { console.log("GAPI client loaded for API"); },
                  function(err) { console.error("Error loading GAPI client for API", err); });
      }
      // Make sure the client is loaded before calling this method.
     static async execute() {
      console.log("execute")
        return gapi.client.youtube.search.list({
          "part": [
            "snippet"
          ],
          "q": "hills"
        })
            .then(function(response) {
                    // Handle the results here (response.result has the parsed body).
                    console.log("Response", response.result.items);
                  },
                  function(err) { console.error("Execute error", err); });
      }
}

export default YouTubeApi;
