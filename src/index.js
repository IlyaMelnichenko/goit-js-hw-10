import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const breedSelect = document.getElementById("selectElement");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");
axios.defaults.headers.common["x-api-key"] = "live_c75ALP6I0630f3xjF7n3livuoVXZK4toulfDzblz6Agac6uFxV1uSQXZf4nzkLRi";

hideLoader();
error.hidden = 'true';
catInfo.hidden = 'true';

fetchBreeds().then((data)=>
breedSelect.insertAdjacentHTML('beforeend',addOption(data))).catch(err=>{
    console.log(err)
    error.hidden='';
});


    

breedSelect.addEventListener('change',(evt)=>{
    breedSelect.hidden = 'true';
    showLoader();
    showDiv();
const selectedBreedId = evt.currentTarget.value;

fetchCatByBreed(selectedBreedId).then((data)=>showCatInfo(data)).then((data)=>{
    hideLoader()
    breedSelect.hidden = '';
}
).catch(err=>error.hidden='')


});



function showDiv(){
    catInfo.hidden ='';
}

function showLoader() {
    loader.hidden ='';
  }

function hideLoader() {
    loader.hidden ='true';
  }

function addOption(arr){
    return arr.map(({name,id}) =>
    `<option value="${id}">${name}</option>`).join('');
     };


function showCatInfo(catData) {
  
    const { url, breeds } = catData[0]
    catInfo.innerHTML = `<div class="box-img">
        <img src="${url}" alt="${breeds[0].name}" width="400"/>
        </div>
        <div class="box">
        <h1>${breeds[0].name}</h1>
        <p>${breeds[0].description}</p>
        <p><b>Temperament:</b> ${breeds[0].temperament}</p>
        </div>`;
      
    };




    
    


     





