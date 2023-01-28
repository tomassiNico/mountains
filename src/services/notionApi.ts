import axios, { AxiosResponse } from "axios";

// What we'll pass into axios
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

const mountainsApi = axios.create({
  baseURL: "http://localhost:3001/v1/",
  headers
});

export interface Mountain {
  id: string
  name: string
  altitude: number
  archived: boolean
  image_url: string
  done_at: Date
  place_id: string
  place_name: string
  country_id: string
  country_name: string
  track_url: string
  created_at: Date
}

export const fetchMountains = async () : Promise<Mountain[]|undefined>  => {
  try{
    const mountains_reponse : AxiosResponse<Mountain[]> = await mountainsApi.get(`/mountains`);
    return mountains_reponse.data
  }catch(e:any){
    console.error(e)
  }
};

export default mountainsApi;
