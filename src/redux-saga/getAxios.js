import axios from "axios"

export const  getAxios =  () =>{

         return axios.get("https://www.freetogame.com/api/games?platform=pc")
}
