import data from "./amazing.js";
import { createCardEvents, orderEvents} from "./events.js"
import { createImages, createTitle} from "./banner.js";


const contentCards = document.getElementById("content-cards")
const contentBanner = document.getElementById("content-banner")
const events = orderEvents(data.events)

contentBanner.appendChild(createImages(events))
contentBanner.appendChild(createTitle("HOME"))
contentCards.appendChild(createCardEvents(events,"./page/"))
