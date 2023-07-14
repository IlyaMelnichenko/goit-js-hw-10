const BASE_URL = "https://api.thecatapi.com/v1/breeds/";
import axios from "axios";
function fetchBreeds(){
    
    return  axios
    .get(`${BASE_URL}`).then((resp)=>{
        if(!resp.ok){
        throw new Error(resp.statusText);
    }
    return resp.json();});
    }
function addOption(arr){
    return arr.map(({name,id}) =>`<option value="${id}">${name}</option>`).join('');
     };

     export {fetchBreeds,addOption}