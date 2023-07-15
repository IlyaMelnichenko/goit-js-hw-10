import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const breedSelect = document.getElementById("selectElement");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");


axios.defaults.headers.common["x-api-key"] = "live_c75ALP6I0630f3xjF7n3livuoVXZK4toulfDzblz6Agac6uFxV1uSQXZf4nzkLRi";


function addOption(arr){
    return arr.map(({name,id}) =>
    `<option value="${id}">${name}</option>`).join('');
     };


fetchBreeds().then((data)=>
breedSelect.insertAdjacentHTML('beforeend',addOption(data))).catch(err=>console.log(err));

function showCatInfo(catData) {
    return catData.map(({url})=>{
        
    })

}
breedSelect.addEventListener('change',(evt)=>{
console.log(evt.currentTarget.value)
const selectedBreedId = evt.currentTarget.value;
// fetchCatByBreed(selectedBreedId).then((data)=>)
})




function fetchCatByBreed(selectedBreedId){
    return fetch
    (`https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreedId}`)
    .then((resp)=>{if(!resp.ok){
        throw new Error(resp.statusText);
    }
    return resp.json();})
    
    
}

     





// new SlimSelect({
//     select: '#selectElement'
//   })
