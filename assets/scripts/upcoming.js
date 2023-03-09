import data from "./amazing.js"
import {upcomingEvents, createCardEvents} from "./events.js"
import { createImages, createTitle} from "./banner.js";

const contentCards = document.getElementById("content-cards")
const contentBanner = document.getElementById("content-banner")
const events = upcomingEvents(data.events, data.currentDate)

contentBanner.appendChild(createImages(events))
contentBanner.appendChild(createTitle("UPCOMING EVENTS"))
contentCards.appendChild(createCardEvents(events))