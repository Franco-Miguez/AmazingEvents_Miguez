import data from "./amazing.js"
import {
    pastEvents, createCardEvents,
    allCategories, createItemCategory
} from "./events.js"
import { createImages, createTitle } from "./banner.js";

const contentCards = document.getElementById("content-cards")
const contentBanner = document.getElementById("content-banner")
const contentCategories = document.getElementById("content-categories")


const events = pastEvents(data.events, data.currentDate)
const categories = allCategories(data.events)

contentBanner.appendChild(createImages(events))
contentBanner.appendChild(createTitle("PAST EVENTS"))
contentCategories.appendChild(createItemCategory(categories))
contentCards.appendChild(createCardEvents(events))

