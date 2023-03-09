import data from "./amazing.js"
import {pastEvents, createCardEvents} from "./events.js"
import { createImages, createTitle} from "./banner.js";

const contentCards = document.getElementById("content-cards")
const contentBanner = document.getElementById("content-banner")
const events = pastEvents(data.events, data.currentDate)

contentBanner.appendChild(createImages(events))
contentBanner.appendChild(createTitle("PAST EVENTS"))
contentCards.appendChild(createCardEvents(events))

