import { database } from './fishData.js';

let fishLocation = document.getElementById("locationList")

export const locationList = () => {
    database.location.map(location => {
        fishLocation.innerHTML +=
`<article class="locations">
<section class="location">
<h3${location.name}</h3>
<p>${location.country}</p>
<p>${location.description}</p>
</section>
</article>`
    })
}