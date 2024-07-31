import { database } from './fishData.js';

// let fishArray = database.fish

let fishInfo = document.getElementById("fishList")

export const fishList = () => {
    // Generate an HTML representation of each fish
    database.fish.map(fish => {
        fishInfo.innerHTML += 
`<article class="fishes">
<img src="${fish.image}" class="fish__image">
<div class="fish__details">
<h1 class="fish__name">${fish.name}</h1>
<p class="fish__species">Species: ${fish.species}</p>
<p class="fish__diet">Diet: ${fish.diet}</p>
<p class="fish__length">Length: ${fish.length} inches</p>
</div>
</article>`
    })
};