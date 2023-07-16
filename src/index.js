import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
const breedSelect = document.getElementById("selectElement");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");
axios.defaults.headers.common["x-api-key"] = "live_c75ALP6I0630f3xjF7n3livuoVXZK4toulfDzblz6Agac6uFxV1uSQXZf4nzkLRi";

hideLoader();
error.classList.add('is-hidden');
catInfo.hidden = 'true';

fetchBreeds().then((data)=>{
    breedSelect.innerHTML = addOption(data);
    new SlimSelect({
        select: breedSelect,
        });
  })
  .catch(onError);

    

breedSelect.addEventListener('change',(evt)=>{
    breedSelect.classList.add('is-hidden');
    showLoader();
    hideDiv()
const selectedBreedId = evt.currentTarget.value;

fetchCatByBreed(selectedBreedId).then((data)=>showCatInfo(data)).then((data)=>{
    hideLoader()
    breedSelect.classList.remove('is-hidden');
    showDiv();
}
).catch(onError)


});


function hideDiv(){
  catInfo.hidden ='true';
}
function showDiv(){
    catInfo.hidden ='';
}

function showLoader() {
    loader.classList.remove('is-hidden');
  }

function hideLoader() {
    loader.classList.add('is-hidden');
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

    function onError(_error){
      breedSelect.classList.add('is-hidden');
      error.classList.remove('is-hidden');
      Notify.warning(
        'Oops! Something went wrong! Try reloading the page or select another cat breed!'
      );
    
    }

    


    
    


     





