import axios from "axios";
import {fetchBreeds,addOption} from "./cat-api"
// import SlimSelect from 'slim-select'
const selecter = document.querySelector('#selectElement')
axios.defaults.headers.common["x-api-key"] = "live_c75ALP6I0630f3xjF7n3livuoVXZK4toulfDzblz6Agac6uFxV1uSQXZf4nzkLRi";

fetchBreeds().then((data)=>selecter.insertAdjacentHTML('beforeend',addOption(data))).catch(err=>console.log(err));

function fetchCatByBreed(breedId){
    return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then((resp)=>{if(!resp.ok){
        throw new Error(resp.statusText);
    }
    const cat =resposne.data[`${breedId}`]
    return cat;});
    }





// new SlimSelect({
//     select: '#selectElement'
//   })
