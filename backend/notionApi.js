const axios = require('axios')

const secretKey = "secret_c2tRpbMZUfGxPhfoDuWIQT8nq6qmoCovwtIb8h5R43U";

// What we'll pass into axios
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${secretKey}`,
  "Notion-Version": "2022-02-22",
  "Access-Control-Allow-Origin": "*"
};

const notionApi = axios.create({
  baseURL: "https://api.notion.com/v1/",
  headers,
});

const mountainDatabaseId = "e50117ca45c744f2ae6276dec8cde2b0";

const mapMountain = (data) => {
  //debugger
  const {
    id,
    created_time: created_at,
    archived,
    properties: {
      Altitude: { number: altitude },
      "Done at": {
        date,
      },
      Place: {
        select: { id: place_id, name: place_name },
      },
      Country: {
        select: { id: country_id, name: country_name },
      },
      Track: { url: track_url },
      Image: { url: image_url },
      Name: { title },
    },
  } = data;

  const name = title.map( t => t.plain_text).join('');
  const done_at = new Date(date?.start) || null;

  return {
    id,
    name,
    altitude,
    archived,
    done_at,
    place_id,
    place_name,
    country_id,
    country_name,
    image_url: image_url??'https://cdn.unenvironment.org/2022-09/nicolai-kramer-unsplash.jpg' ,
    track_url,
    created_at,
  };
};

const fetchMountains = async () => {
  try{
    const mountains_reponse = await notionApi.post(`/databases/${mountainDatabaseId}/query`);
    
    return mountains_reponse.data.results.map(mapMountain)
  }catch(e){
    console.error(e)
  }
};

module.exports = { fetchMountains }