import { database } from './fishData.js';

let tipsInfo = document.getElementById("tipList")

export const tipList = () => {
    database.tips.map(tips => {
        tipsInfo.innerHTML +=
`<li class="tip">${tips.topic}
<ul class="tips">${tips.text}</ul>
</li>`

    })
}