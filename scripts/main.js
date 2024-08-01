import { fishList, mostHolyFish, regularFish, soldierFish } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

let fishInfo = document.getElementById("fishList")

// Generate the fish list
// const fishHTML = fishList()
const holyFishes = mostHolyFish()
const soldierFishies = soldierFish()
const regFishes = regularFish()

fishInfo.innerHTML = `${holyFishes}${soldierFishies}${regFishes}`

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element