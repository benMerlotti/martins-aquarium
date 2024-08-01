import { database } from './fishData.js';

// let fishArray = database.fish

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

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ""

    for (let fish of database.fish) {
        if (fish.length % 3 === 0) {
            holyFish +=
`<article class="fishes">
<img src="${fish.image}" class="fish__image">
<div class="fish__details">
<h1 class="fish__name">${fish.name}</h1>
<p class="fish__species">Species: ${fish.species}</p>
<p class="fish__diet">Diet: ${fish.diet}</p>
<p class="fish__length">Length: ${fish.length} inches</p>
</div>
</article>`

        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFishes = ""
    
    for (let fish of database.fish) {
        if (fish.length % 5 === 0) {
            soldierFishes +=
`<article class="fishes">
<img src="${fish.image}" class="fish__image">
<div class="fish__details">
<h1 class="fish__name">${fish.name}</h1>
<p class="fish__species">Species: ${fish.species}</p>
<p class="fish__diet">Diet: ${fish.diet}</p>
<p class="fish__length">Length: ${fish.length} inches</p>
</div>
</article>`

        }
    }

    return soldierFishes
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let regFish = ""

    for (let fish of database.fish) {
        if (fish.length % 5 != 0 && fish.length % 3 != 0) {
            regFish +=
`<article class="fishes">
<img src="${fish.image}" class="fish__image">
<div class="fish__details">
<h1 class="fish__name">${fish.name}</h1>
<p class="fish__species">Species: ${fish.species}</p>
<p class="fish__diet">Diet: ${fish.diet}</p>
<p class="fish__length">Length: ${fish.length} inches</p>
</div>
</article>`

        }
    }

    return regFish

}